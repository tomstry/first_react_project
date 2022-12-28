import { useState } from 'react';
import styles from './CardForm.module.scss';
import Button from '../Button/Button';
import TextInput from '../TextInput/TextInput';

const CardForm = props => {
  const [cardName, setCardName] = useState('');
  const handleSubmit = e =>{
    e.preventDefault();
    props.action({title: cardName}, props.columnId);
    setCardName('');
  }
  return(
    <form className={styles.cardForm} onSubmit={handleSubmit}>
      <TextInput type='text' value={cardName} onChange={e => setCardName(e.target.value)}/>
      <Button>Add card</Button>
    </form>
  );
};

export default CardForm;