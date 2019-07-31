import { Notification as PageNotification } from "element-ui";

export default function notice(title, options) {
  Notification.requestPermission(perm => {
    if (perm === "granted") {
      new Notification(title, options);
    }
    if (PageNotification) {
      PageNotification({
        title: title,
        message: options.body
      });
    }
  });
}
