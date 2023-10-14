



function Select({name, options}){
  return(
    <select name={name}>
      {options.map(option=>(
        <option value={option}>{option}</option>
      ))}
    </select>
  )
}
export default Select;