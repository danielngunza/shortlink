

//obter link já salvo
export async function getLinkSave(key){
    const myLinks = await localStorage.getItem(key)

    let linksSave = JSON.parse(myLinks) || [];

    return linksSave;
}

// salvar link

export async function saveLink(key, newLink){
    let linkStored = await getLinkSave(key);


    const hasLink = linkStored.some(link => link.id === newLink.id)

    if(hasLink){
        console.log("Esse já existe")
        return;

    }

    linkStored.push(newLink)

    await localStorage.setItem(key, JSON.stringify(linkStored))
    console.log("Link Salvo")

}

// deletar link salvo

export function deleteLink(links, id){

    let myLinks = links.filter( item => {
        return( item.id !== id)
    })
    localStorage.setItem("@encurtalink", JSON.stringify(myLinks))
    console.log("LINK DELETADO")

    return myLinks;
}