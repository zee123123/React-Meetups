import classes from './Card.module.css';

// props.children holds all content between <Card> </Card>

function Card(props) {
  return <div className={classes.card}>{props.children}</div>;
}

export default Card;