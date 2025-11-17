Fix: reset permissions + reinstall

Run this inside:

cd /home/assist.wtf-website

1. Fix node_modules permissions
sudo chmod -R u+rwx node_modules
sudo chmod -R u+rwx node_modules/.bin

2. Ensure your user owns the project directory

If you are logged in as root, switch to your normal user.
If you are working as root, then allow root to own it:

sudo chown -R $USER:$USER /home/assist.wtf-website

3. Re-install dependencies cleanly
rm -rf node_modules
npm install

4. Try the build again
npm run build

sudo rsync -av dist/ /var/www/assist-wtf/
sudo chown -R www-data:www-data /var/www/assist-wtf
