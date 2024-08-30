# Chat App

A real-time chat application built with React and Firebase. It allows users to sign up, log in, and chat with other users in real-time.

## Features

- User authentication (sign-up and login).
- Real-time messaging.
- Support for multiple chat rooms.
- Notifications for new messages.
- Responsive and user-friendly interface.

## Technologies Used

- **React**: For building the user interface.
- **Firebase**: For authentication, real-time database, and hosting.
- **CSS Modules**: For styling components.
- **React Router**: For navigating between different pages.

## Installation

To get started with the project, follow these steps:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/yourusername/chat-app.git
    cd chat-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Set up Firebase:**

    - Create a new project in the [Firebase Console](https://console.firebase.google.com/).
    - Enable Authentication (Email/Password) in the Firebase console.
    - Set up Firestore as your real-time database.
    - Copy your Firebase project credentials and create a `.env` file in the root directory with the following content:

    ```env
    REACT_APP_FIREBASE_API_KEY=your_api_key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
    REACT_APP_FIREBASE_PROJECT_ID=your_project_id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
    REACT_APP_FIREBASE_APP_ID=your_app_id
    ```

4. **Run the application:**

    ```bash
    npm start
    ```

    The app will be available at [http://localhost:3000](http://localhost:3000).

## Usage

1. **Sign Up / Log In:**
    - New users can sign up using their email and password.
    - Returning users can log in with their credentials.

2. **Chat in Real-Time:**
    - Users can join existing chat rooms or create new ones.
    - Messages are sent and received in real-time.

3. **Notifications:**
    - Users will receive notifications for new messages.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow the code style and write tests for any new functionality.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
