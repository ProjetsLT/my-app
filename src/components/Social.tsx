import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

export const Social = () => {
    return (
        <section className="mt-5">
            <h3 className="text-2xl font-extrabold">Mes réseaux sociaux</h3>
            <ul className="mt-5">
                <li className='flex items-center'><FaFacebook className='mr-2'/><a className="hover:text-[blue]" href="https://www.facebook.com/?locale=fr_FR" target ="blank">Facebook</a></li>
                <li className='flex items-center'><FaInstagram className='mr-2'/><a className="hover:text-[blue]" href="https://www.instagram.com/ " target ="blank">Instagram</a></li>
                <li className='flex items-center'><FaTiktok className='mr-2'/><a className="hover:text-[blue]" href="https://www.tiktok.com/fr/" target ="blank">Tik Tok</a></li>
            </ul>
        </section>
    )
}