import { notification } from 'antd';

// Function to display notification from bottom right side
const showNotification = (type, message, description) => {
  notification[type]({
    message: message,
    description: description,
    placement: 'bottomRight', 
  });
};

export default showNotification;