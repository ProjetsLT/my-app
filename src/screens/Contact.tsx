export const Contact = () => {
    return (
        <main>
            <h3 className="text-2xl font-extrabold">Contact</h3>
            <p className="mt-5">Email : testReactJS@mail.fr</p>

            <form className="mt-5">
                <label className="block" htmlFor="sujet">Sujet de votre mail</label>
                <input className="border" type="text" name="sujet" id="sujet" placeholder="Quel est le sujet ?"/>

                <label className="block" htmlFor="email">Email</label>
                <input className="border" type="email" name="email" id="email" placeholder="Entrez votre email"/>

                <label className="block" htmlFor="message">Sujet de votre mail</label>
                <textarea rows={10} className="border resize-none h-36 w-96" name="message" id="message" placeholder="Entrer votre message"></textarea>
            </form>

        </main>
    )
}