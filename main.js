function NameForm() {
  const [inputValue, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('Le nom a été soumis : ' + inputValue);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input type='text' value={inputValue} onChange={handleChange} />
      </label>
      <input type='submit' value='Envoyer' />
    </form>
  );
}

function EssayForm() {
  const [textValue, setTextValue] = React.useState(
    'Écrivez un essai à propos de votre élément du DOM préféré'
  );

  const handleChange = (event) => {
    setTextValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('Un essai a été envoyé : ' + textValue);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Essay:
        <textarea value={textValue} onChange={handleChange} />
      </label>
      <input type='submit' value='Envoyer' />
    </form>
  );
}

function FlavorForm() {
  const [selectValue, setSelectValue] = React.useState('coconut');

  const handleChange = (event) => {
    setSelectValue(event.target.value);
  };

  const handleSubmit = (event) => {
    alert('Votre parfum favori est : ' + selectValue);
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Choisissez votre parfum favori :
        <select value={selectValue} onChange={handleChange}>
          <option value='grapefruit'>Pamplemousse</option>
          <option value='lime'>Citron vert</option>
          <option value='coconut'>Noix de coco</option>
          <option value='mango'>Mangue</option>
        </select>
      </label>
      <input type='submit' value='Envoyer' />
    </form>
  );
}

function Form() {
  const [input, setInput] = React.useState({
    myName: '',
    comment: 'Écrivez un essai à propos de votre élément du DOM préféré',
    perfume: 'coconut',
  });
  const handleChange = (event) => {
    const {name, value} = event.target
    setInput(prev => ({
      ...prev,
      [name]: value,
    }))
  };

  const handleSubmit = (event) => {
    alert(`Name: ${input.myName} \n Comment: ${input.comment} \n Favourite perfume: ${input.perfume}`);
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Nom :
        <input
          type='text'
          value={input.myName}
          onChange={handleChange}
          name='myName'
        />
      </label>
      <label>
        Essay:
        <textarea
          value={input.comment}
          onChange={handleChange}
          name='comment'
        />
      </label>
      <label>
        Choisissez votre parfum favori :
        <select value={input.perfume} onChange={handleChange} name='perfume'>
          <option value='grapefruit'>Pamplemousse</option>
          <option value='lime'>Citron vert</option>
          <option value='coconut'>Noix de coco</option>
          <option value='mango'>Mangue</option>
        </select>
      </label>
      <input type='submit' value='Envoyer' />
    </form>
  );
}
ReactDOM.render(<Form />, document.querySelector('#app'));
