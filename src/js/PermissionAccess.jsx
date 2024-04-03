const usePermissionUserAccess = () => {
  return ['accessADM']
}

export default function PermissionAccess({ children, permissions }) {
  const userPermission = usePermissionUserAccess()

  if (
    permissions.some(permission => {
      return userPermission.includes(permission)
    })
  ) {
    return children
  }

  return null
}
