# eqtlMobile
Aplicativo da Equaltorial Energia feito através do react-native CLI

## Android Emulator
Para rodar no android emulator, inicie algum emulador pelo android studio e digite 
```
yarn start
```
abra outro terminal na raiz do projeto e digite:
```
react-native run-android
```
## Usb device
Caso queira debugar no próprio celular, conecte o dispositivo no usb, permita o debugg através das Opções de desenvolvedor,
veja se o dispositivo está conectado através do comando
```
adb devices
```
após ver o nome do seu dispositivo digite no terminal, dentro da raiz do projeto:

```
npx react-native run-android
```
