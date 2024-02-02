import { LoaderFunctionArgs, json } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import invariant from "tiny-invariant";
import { getContact } from "~/data";

export const loader = async ({ params }: LoaderFunctionArgs) => {
    invariant(params.contactId, "Missing contactId param")
    const contact = await getContact(params.contactId)
    if (!contact) {
        throw new Response("Not Found", { status: 404 })
    }
    return json({ contact })
}

export default function EditContact() {
    const { contact } = useLoaderData<typeof loader>()
    return (
        <Form key={contact.id} id="contact-form" method="post">
            <p>
                <span>Name</span>
                <input
                    defaultValue={contact.first}
                    aria-label="First name"
                    name="first"
                    type="text"
                    placeholder="First"
                />
                <input
                    aria-label="Last name"
                    defaultValue={contact.last}
                    name="last"
                    placeholder="Last"
                    type="text"
                />
            </p>
            <label>
                <span>Twitter</span>
                <input
                    defaultValue={contact.twitter}
                    aria-label="Twitter"
                    name="twitter"
                    placeholder="Twitter"
                    type="text"
                />
            </label>
            <label>
                <span>Avatar URL</span>
                <input
                    defaultValue={contact.avatar}
                    aria-label="Avator"
                    name="avator"
                    placeholder="Avator"
                    type="text"
                />
            </label>
            <label>
                <span>Notes</span>
                <textarea
                    defaultValue={contact.notes}
                    name="notes"
                    rows={6}
                />
            </label>
            <p>
                <button type="submit">Save</button>
                <button type="button">Cancel</button>
            </p>
        </Form>
    )
}
