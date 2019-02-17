import { connect } from "react-redux";
import { compose, withStateHandlers } from "recompose";
import _ from "lodash";
import { fetchPokedex } from "../../actions/pokedex";

const mapStateToProps = state => ({
  cards: _.get(state, "pokedeck.data.cards", [])
});

export default compose(
  connect(
    mapStateToProps,
    { fetchPokedex }
  ),
  withStateHandlers(
    {
      list: [],
      select: "name",
      showList: false
    },
    {
      handleSelect: () => e => {
        return { select: e.target.value };
      },
      handleSearchPokedex: (state, props) => search => {
        const { list, select } = state;
        const { fetchPokedex } = props;
        clearTimeout(this.time);
        this.time = setTimeout(() => {
          fetchPokedex(list.length, { [select]: search });
        }, 500);
      },
      handleShowList: state => () => {
        const { showList } = state;
        return { showList: !showList };
      },
      handleList: state => value => {
        const { list } = state;
        list.push(value);
        return { list };
      },
      handleRemoveList: state => index => {
        const { list } = state;
        list.splice(index, 1);
        return { list };
      },
      handleShowList: (state, props) => () => {
        const { fetchPokedex } = props;
        const { showList, list } = state;
        if (!showList) fetchPokedex(list.length);
        return { showList: !showList };
      }
    }
  )
);
