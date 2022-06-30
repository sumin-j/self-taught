// key : AIzaSyAsLXDLpmXVgedQP2psx-xNl8y57og-eqw
// url : https://www.googleapis.com/youtube/v3/playlistItems

const vidList = document.querySelector('.vidList');
const key = 'AIzaSyAsLXDLpmXVgedQP2psx-xNl8y57og-eqw';
const playListId = 'PLXjsRlnOZcXu65w1Fa1cfZJ2XnRtSe3Yg';
const num = 6;
const url = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&key=${key}&playlistId=${playListId}&maxResults=${num}`;

fetch(url).then(data=>{
    return data.json();
})

.then(json => {
    let items = json.items;
    let result = '';

    items.map(item=>{
        let title = item.snippet.title;

        if (title.length > 10) {
            title = title.substr(0,20) + '...';
        }

        let desc = item.snippet.description;
        
        if(desc.length > 20) {
            desc = desc.substr(0,20) + '...';
        }

        let date = item.snippet.publishedAt;
        date = date.split('T')[0];

        result += `<article>
        <a href="${item.snippet.resourceId.videoId}" class="pic">
            <img src="${item.snippet.thumbnails.medium.url}">
        </a>
        <div class="desc">
            <h2>${title}</h2>
            <p>${desc}</p>
            <span>${date}</span>
        </div>
    </article>`;
    })

    vidList.innerHTML = result;
})


