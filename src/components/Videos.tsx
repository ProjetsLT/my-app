
type VideoProps = {  // On passe une propriété unique pour notre composant Video ici ça sera une chaine de caractères
    id: string
}

export const Video : React.FC<VideoProps> = ({id}) => {
    return (
        <div>
            <iframe width="500" height="315" src={"https://www.youtube.com/embed/" + id}
            title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
        </div>
    )
}