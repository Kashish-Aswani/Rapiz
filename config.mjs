export const WEBSOCKET_PUBLIC_URL = "https://rapiz.onrender.com/"
export const WEBSOCKET_SERVER_PORT = 5505

const QUIZZ_CONFIG = {
  password: "PASSWORD",
  subject: "Machine Learning",
  questions: [
    {
      question: "What is machine learning?",
      answers: [
        "A type of computer",
        "A technique for teaching computers to learn from data",
        "A programming language",
        "A hardware device",
      ],
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "Which of the following is an example of an unsupervised learning algorithm?",
      answers: ["Linear Regression", 
                "K-Means Clustering", 
                "Decision Trees", 
                "Support Vector Machines"],
      image:
        "https://nixustechnologies.com/wp-content/uploads/2022/03/unsupervised-machine-learning-1.webp",
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "What is the purpose of feature engineering in machine learning?",
      answers: ["Building better hardware", "Selecting the most relevant features", "Engineering new features using deep learning", "Extracting features from images"],
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "What is cross-validation used for in machine learning?",
      answers: [
        "Cross-training different models",
        "Evaluating model performance on multiple datasets",
        "Selecting hyperparameters",
        "Testing a model's generalization ability",
      ],
      solution: 3,
      cooldown: 5,
      time: 15,
    },
    {
      question: "What is the role of a confusion matrix in classification?",
      answers: [
        "Visualizing decision boundaries",
        "Evaluating model performance",
        "Selecting hyperparameters",
        "Handling missing data",
      ],
      image:
        "https://glassboxmedicine.com/wp-content/uploads/2019/02/confusion-matrix.png?w=431&h=243",
      solution: 1,
      cooldown: 5,
      time: 15,
    },
    {
      question: "What is the key difference between supervised and unsupervised learning?",
      answers: [
        "The presence of labeled data in supervised learning",
        "The use of deep neural networks in unsupervised learning",
        "The requirement for large datasets in supervised learning",
        "The absence of algorithms in unsupervised learning",
      ],
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Supervised_and_unsupervised_learning.png/640px-Supervised_and_unsupervised_learning.png",
      solution: 0,
      cooldown: 5,
      time: 15,
    },
    {
      question: "What is the primary purpose of a validation set in machine learning?",
      answers: [
        "To train the model",
        "To test the model",
        "To evaluate the model during training",
        "To compare multiple models",
      ],
      image:
        "https://cdn.prod.website-files.com/651c34ac817aad4a2e62ec1b/65367da4d6cef182c40bf8dd_Screen%2BShot%2B2023-02-01%2Bat%2B13.51.32.png",
      solution: 2,
      cooldown: 5,
      time: 15,
    },
  ],
}

// DONT CHANGE
export const GAME_STATE_INIT = {
  started: false,
  players: [],
  playersAnswer: [],
  manager: null,
  room: null,
  currentQuestion: 0,
  roundStartTime: 0,
  ...QUIZZ_CONFIG,
}
