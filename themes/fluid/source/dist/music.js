const ap = new APlayer({
    container: document.getElementById('aplayer'),
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