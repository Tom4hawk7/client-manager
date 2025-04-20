import ClientForm from '../components/form/ClientForm'
import { redirect } from 'react-router'
import Button from '../components/button/Button'
import { Cross1Icon, TrashIcon } from '@radix-ui/react-icons'
import ButtonLink from '../components/button/ButtonLink'
import TestClientForm from '../components/form/TestClientForm'

export const createClientAction = async ({ request }) => {
  const data = Object.fromEntries(await request.formData())
  await window.form.create(data)
  return redirect('..')
}

export default function CreateClient() {
  return (
    <TestClientForm>
      <Button variant="blue" type="submit">
        Submit
      </Button>

      <Button disabled={true} size={'42px'}>
        <TrashIcon width="20px" height="20px" />
      </Button>

      <ButtonLink content="icon" size="42px" to="..">
        <Cross1Icon width="20px" height="20px" />
      </ButtonLink>
    </TestClientForm>
  )
}
