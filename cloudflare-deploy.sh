mkdir out

npm install
npm install sass

npm run build-stag
mv ./build/ out/testnet

npm run build
mv ./build/ out/mainnet
