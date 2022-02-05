import React, {useEffect} from 'react';
import Container from './Container';

const Page = (props) => {
  useEffect(() => {
    document.title = `${props.title} | React App`;
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container title={props.itle} wide={props.wide}>
      {props.children}
    </Container>
  );
};
export default Page;
