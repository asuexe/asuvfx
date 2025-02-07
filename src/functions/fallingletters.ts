export const generateRandomLetter = () => {
  const letters = [
    "Algorithm", "API", "Array", "Asynchronous", "Authentication",
    "Backend", "BigData", "Binary", "Blockchain", "Boolean",
    "Cache", "Cloud", "Compiler", "Containerization", "CSS",
    "DataStructure", "Database", "Debugging", "DeepLearning", "Deployment",
    "DevOps", "DNS", "Docker", "Encryption", "Endpoint",
    "EventLoop", "Framework", "Frontend", "Function", "Git",
    "GraphQL", "Hashing", "Heap", "HTTP", "IDE",
    "Indexing", "Inheritance", "IoT", "JavaScript", "JSON",
    "Kernel", "Kubernetes", "Lambda", "Latency", "Library",
    "LinkedList", "LoadBalancer", "MachineLearning", "Microservices", "Middleware",
    "Module", "Multithreading", "NeuralNetwork", "NodeJS", "Normalization",
    "NoSQL", "OAuth", "ObjectOriented", "ObserverPattern", "OpenSource",
    "OperatingSystem", "Optimization", "ORM", "Overloading", "Packet",
    "Parsing", "Polymorphism", "Protocol", "Proxy", "Queue",
    "React", "Recursion", "Redis", "Refactoring", "Regression",
    "RelationalDatabase", "REST", "SaaS", "Scalability", "SDK",
    "Semaphore", "Serverless", "Singleton", "Socket", "SortingAlgorithm",
    "SQL", "SSL", "Stack", "StateManagement", "StaticTyping",
    "Syntax", "TCP", "Thread", "Tokenization", "TypeScript",
    "UI", "UnitTesting", "UX", "Variable", "VersionControl",
    "Virtualization", "WebAssembly", "WebSocket", "YAML", "ZeroTrust"
  ];
  
  
  return letters[Math.floor(Math.random() * letters.length)];
};