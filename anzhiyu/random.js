var posts=["2024/07/07/每天一个linux命令/","2024/07/07/迁移到hexo的第一篇博文/","2024/07/04/createvue2project/","2024/07/02/网站美化/","2024/06/29/排序算法总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };