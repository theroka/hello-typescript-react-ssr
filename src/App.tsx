import React, { Fragment, useState } from "react";
import { Heading, TextInput, UnorderedList, ListItem } from "evergreen-ui";

interface AppProps {
  items?: Array<string | number>;
}

const App = (props: AppProps) => {
  const [state, setState] = useState({ text: "foobar" });
  const { items } = props;
  return (
    <Fragment>
      <Heading size={900}>Hello.</Heading>
      <TextInput
        value={state.text}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setState({ ...state, text: e.target.value })
        }
      />
      <Heading size={400}>{state.text}</Heading>
      <UnorderedList size={400}>
        { items && items.map((item, key) => (
          <ListItem key={key}>{item}</ListItem>
        ))}
      </UnorderedList>
    </Fragment>
  );
};

export default App;
