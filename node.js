// 0926反馈
// 案例比较多; 面试题
// vue基础已经开放了，本地加载去掉
// 44期，我不是很清楚，可以找咨询老师问一下

/**
 *
 * 获取仓库的两种方式：1、自行初始化 git init    2、通过克隆的方式去拷贝一份 git clone 仓库的地址
 *
 * git init
 * git add .
 * git commit -m '描述信息尽量以简短的辞藻去描述'
 * 再去修改代码
 * git add .
 * git commit -m '再次朝本地仓库提交'
 * 再去修改代码
 * git add .
 * git commit -m '再次朝本地仓库提交'
 * git remote add origin 远程仓库地址 （建议和远程仓库的链接）
 * git push -u origin master （第一次朝仓库提交的时候，需要指定远程仓库的名称和所在分支名称）
 *
 *
 */

// 分支在开发过程的作用 (branch 树杈)
// 每位开发者都会有一个自己的开发的分支（保证成员之间开发的东西互不影响）（feature/你的名字）（合并：各个成员之间可以把所有功能都放到一块去）

// 每个新建好的仓库，默认都会有一个主分支：master  -> github里面用master -> main
// 在码云里面，也是用的 master
// 作用：一般只做保存用，不在此分支开发东西，做合并用（做代码汇集用）

// 功能分支：就是专门用来开发新功能的（每个人都会有一个）（分支名称的命名规范：feature/你的名字）

// 查看所有分支的列表：git branch
// 创建新分支：git branch 分支的名称 (新分支的代码和刚刚创建的那个分支代码是一样)
// 切换分支：git checkout 分支的名称 （要求是：切换分支之前最好把代码提交一下 不停的add commit）
// 快速创建分支和切换动作：git checkout -b 分支的名称

// 合并分支步骤：1、在功能分支中实现编码，编码之后要提交  2、先切回main分支，再合并（git merge user）

// 删除分支：git branch -d 你要删除的分支的名称

// 冲突产生的原因：只要在不同分支上对同一个文件(同一行)都做了操作，一合并，肯定会发生冲突

// 冲突必须要手动解决的（公司里面，你可以把写这个功能的人，叫过来，你俩讨论一下），解决完之后需要干嘛？依然需要add

// conflict 冲突


// 将本地功能分支，朝远程仓库进行推送： git push -u origin login

// 查看远程仓库的所有的分支：git remote show origin

// 同桌A先去邀请同桌B作为开发者（同桌B会收一个激活邮件），同桌A把他自己的仓库的地址https协议给同桌B，git clone 自行体验看下默认取的是哪个分支
// 现在，请同桌B去拉同桌A的功能分支，再去修改一点东西，再去提交，最后同桌A去看能否看到同桌B提交上来的东西

// git checkout 分支
// git checkout -b 新分支的名称 远程仓库的别名/远程仓库分支名称

// 在某个分支里面拉取最新的代码，同桌A去提交一点东西，同桌B去拉取

// git pull (pull 拉取、往下拉)
// git push (push 推、往上推)

// 删除远程分支：git push origin --delete 你要删除的远程仓库分支的名称（当了解）

/**
 *
 * 总结：
 * git init
 * git add .
 * git commit -m '描述信息'
 * git remote add origin 远程仓库的地址(添加本地工程和远程仓库的连接)
 * git push -u origin master
 *
 * git branch user/login/role/userinfo
 * git checkout user/login/role/userinfo
 *
 * git checkout -b 你要创建的分支名称
 * git add .
 * git commit -m 'user 开发了用户相关的功能'
 * git push -u origin user
 * git add .
 * git commit -m '新加了xxx功能'
 * git push
 *
 * git checkout master
 * git merge user
 * git push
 *
 * 小工具很好学，但是你要体验
 *
 */