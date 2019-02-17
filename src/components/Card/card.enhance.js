import { compose, withStateHandlers } from "recompose";
import _ from "lodash";

export default compose(
  withStateHandlers(
    {
      showButton: false
    },
    {
      handleShowButton: state => () => {
        const { showButton } = state;
        return { showButton: !showButton };
      }
    }
  )
);
