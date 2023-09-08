import { BsLink } from 'react-icons/bs'

export const Ressources = () => {
    return (
        <main>
            <h3 className="text-2xl font-extrabold">Ressources du site</h3>
            <ul className="mt-5">
                <li className='flex items-center'><BsLink className='mr-2'/><a className="hover:underline" href="https://youtube.com/" target ="blank">Accès à Youtube</a></li>
                <li className='flex items-center'><BsLink className='mr-2'/><a className="hover:underline" href="https://github.com/" target ="blank">Accès à GitHub</a></li>
                <li className='flex items-center'><BsLink className='mr-2'/><a className="hover:underline" href="https://google.com/" target ="blank">Ouvrir une page google</a></li>
            </ul>
        </main>
    )
}