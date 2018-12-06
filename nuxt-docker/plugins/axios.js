export default function({ $axios }) {
  $axios.onRequest((config) => {
    const token = process.env.QIITA_TOKEN
    if (token) {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
  })
}
