# eqtlMobile
Aplicativo feito para trazer os serviços da Equatorial Energia para o ambiente mobile, feito através do react-native CLI

## Android Emulator
Para rodar no android emulator, inicie algum emulador pelo android studio e digite em um terminal na raiz do projeto:
```
yarn start ou npm start
```
Caso não tenha yarn, acesse https://yarnpkg.com/getting-started/install</br>
Abra outro terminal na raiz do projeto e digite:
```
react-native run-android
```
## Usb device
Caso queira debugar no próprio celular, conecte o dispositivo no usb, permita o debugg através das opções de desenvolvedor,
veja se o dispositivo está conectado através do comando:
```
adb devices
```
após ver o nome do seu dispositivo digite no terminal, dentro da raiz do projeto:

```
npx react-native run-android
```
