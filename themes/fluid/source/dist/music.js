const ap = new APlayer({
    container: document.getElementById('aplayer'),
    theme: '#e9e9e9',
	//mini: true,
    autoplay: true,
    loop: 'all',
    volume: 0.7,
    listFolded: true,
	mutex: true,
    listMaxHeight: 60,
    audio: [
        {
            name: 'eyes on me',
            artist: '王菲',
            url: 'https://m801.music.126.net/20220806223416/2f75fb00fac862fec5ffd8520587feb2/jdyyaac/obj/w5rDlsOJwrLDjj7CmsOj/12084471651/68c3/7922/8bef/b57a5c80891f45f2a89d04a7a6d71ebf.m4a',
            cover: '最终幻想.jpg',
        }
    ]
});

const colorThief = new ColorThief();
const image = new Image();
const xhr = new XMLHttpRequest();
const setTheme = (index) => {
    if (!ap.list.audios[index].theme) {
        xhr.onload = function(){
            let coverUrl = URL.createObjectURL(this.response);
            image.onload = function(){
                let color = colorThief.getColor(image);
                ap.theme(`rgb(${color[0]}, ${color[1]}, ${color[2]})`, index);
                URL.revokeObjectURL(coverUrl)
            };
            image.src = coverUrl;
        }
        xhr.open('GET', ap.list.audios[index].cover, true);
        xhr.responseType = 'blob';
        xhr.send();
    }
};
setTheme(ap.list.index);
ap.on('listswitch', (index) => {
    setTheme(index);
});