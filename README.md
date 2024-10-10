# Funny videos - Share your humour!

## Introduction
This repo contains server client source code for Funny Videos - a platform where user can watch funny Youtube videos and share theirs. With Funny Videos, you can:
- Signup & Login.
- Share your favorite Youtube Video.
- Watch all of shared videos - by you and all other users!
- Receive notification in real time when a user share their video

## Prerequisites
In order to run this project, you will need to install the following dependencies:
- Node: 18.12.1
- pnpm: 9.70

## Installation & Configuration
First thing first, let's clone this project:
```
git clone https://github.com/vinhbt241/video-share-app-backend.git
```

Navigate to the project's directory and run the following command:
```
cp .example.env .env.development.local
```

For the sake of convenience, let's add NVM to easily manage Node's version. See [Install instruction](https://www.theodinproject.com/lessons/foundations-installing-node-js)

Install Node:
```
nvm install 18.12.1
nvm use 18
```

Install pnpm: See [Install instruction](https://pnpm.io/installation)

Finally, run the following command:
```
pnpm install
```


## Running the Application
To start the application,  run the following command:
```
pnpm dev
```

## Deployment
Run the following command to create production build:
```
pnpm build
```
Run the following command to preview the production build:
```
pnpm preview
```

## Live version
Check out the [live version of Funny Videos](http://video-share-app-fe.s3-website-ap-southeast-1.amazonaws.com)!
