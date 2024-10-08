export const TYPE_MANAGEMENT = {
  CODE_DEMO: "codeDemo",
  AUTH_GUARD: "AuthGuard",
  GUEST_GUARD:"GuestGuard",
  MODE_CREATE: "create",
  MODE_UPDATE: "update",
  MODE_DETAIL: "detail",
  MODE_DELETE: "delete",
  DEFAULT_SIZE: 10,
  DEFAULT_CURRENT: 0,
  DEFAULT_TOTAL: 0,
  STATUS_SUCCESS: 200,
  STATUS_ERROR_400: 400,
  STATUS_ERROR_404: 404
};

export type NotificationType = 'success' | 'info' | 'warning' | 'error';
export type ModalType = 'success' | 'info' | 'warning' | 'error' | 'confirm';
export type ButtonType = 'bassic' | 'create' | 'update' | 'goUpdate' | 'remove' | 'back' | 'detail' | 'clearForm' | 'search' | 'icon';
export type PreviewType = 'Image' | 'Video';
export type AvatarType = 'avatar' | 'group';
