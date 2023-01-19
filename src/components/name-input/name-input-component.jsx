export const NameInput = ({ handeChange }) => {
  return (
    <div>
      <label htmlFor='user-name'>Type name for filter</label>
      <input name='user-name' type='text' onChange={handeChange}></input>
    </div>
  )
}
