set -e
npm run build # 生成静态文件
cd docs/.vuepress/dist # 进入生成的文件夹

# deploy to github
echo 'www.blagecode.cn' > CNAME
if [ -z "$GITHUB_TOKEN" ]; then
  msg='deploy'
  githubUrl=git@github.com:blage-coding/blog.git
else
  msg='来自github action的自动部署'
  githubUrl=https://blage-coding:${GITHUB_TOKEN}@github.com/blage-coding/blog.git
  git config --global user.name "blagecode"
  git config --global user.email "panhai0206@163.com"
fi
git init
git add -A
git commit -m "${msg}"
git push -f $githubUrl master:gh-pages # 推送到github

cd -
rm -rf docs/.vuepress/dist