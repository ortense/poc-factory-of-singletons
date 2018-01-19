
const toBase64 = str => Buffer.from(str).toString('base64')

exports.create = async ({ email, password, firstName, lastName }, crypt = toBase64) => {
  const privates = {
    firstName,
    lastName,
    password: crypt(password)
  }

  return {
    email,

    get password () { return privates.password },
    set password (val) { privates.password = crypt(val) },

    get name () { return `${privates.firstName} ${privates.lastName}` },

    get firstName () { return privates.firstName },
    set firstName (val) { return (privates.firstName = val) },

    get lastName () { return privates.lastName },
    set lastName (val) { return (privates.lastName = val) }
  }
}
