export default function ClientForm() {
  return (
    <form>
      <fieldset>
        <label htmlFor="name">Name</label>
        <input name="name" type="text" />
      </fieldset>
      <button type="submit">Submit</button>
    </form>
  )
}
