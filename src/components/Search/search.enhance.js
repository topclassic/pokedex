import { compose, withStateHandlers } from "recompose";

export default compose(
  withStateHandlers(
    props => ({
      value: ""
    }),
    {
      onChange: (_, props) => event => {
        props.onChange && props.onChange(event.target.value);
        return {
          value: event.target.value
        };
      }
    }
  )
);
