# Beat Saber Companion

A companion app for the VR rhythym game Beat Saber.
Allows users to browse the Beat Saver database for custom beatmaps made by the community.
Provides easy access to the latest news for Beat Saber straight from the developers.
Shows all Twitch channels that are currently live-streaming Beat Saber in descending order of viewership.

## Getting Started

You can clone this repository if you'd like to run it on your local machine.

- You must ensure that you have Node installed, for installing Node, follow [these](https://nodejs.org/en/download/) instructions.
  Target the clone via your preferred terminal and run this command:

```
npm install
```

Once dependencies have successfully installed, run the command:

```
npm start
```

- Note that due to the Oauth2 handshake process, only the local machine hosting the development
  server can access the Twitch Streams page due to redirect URL issues. You must also have a Twitch
  account that you can use to login to view the Twitch Stream page successfully.

### Alternatively....

You can view a working demonstration of the Beat Saber Companion online at:
https://beatsabercompanion.herokuapp.com/

## Built With

- [creat-react-app](https://github.com/facebook/create-react-app)

## Authors

- **Christian Baldwin** - _Initial work_ - [Aplombomb](https://github.com/Aplombomb)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

- Hat tip to [Daniel Landen](https://github.com/DanielLandonJr) for the idea bouncing
