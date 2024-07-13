var posts=["2024/07/13/打卡/","2024/07/13/择校/","2024/07/12/docker常用命令/","2024/07/12/安知鱼主题音乐胶囊相关问题/","2024/07/09/bg/","2024/07/09/swagger笔记/","2024/07/07/迁移到hexo的第一篇博文/","2024/07/04/createvue2project/","2024/06/29/排序算法总结/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };