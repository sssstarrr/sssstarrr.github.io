var posts=["2024/07/07/123/","2024/07/07/每天一个linux命令/","2024/07/07/这是一篇新的博文/","2024/07/07/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };