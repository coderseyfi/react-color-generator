import { toast } from 'react-toastify'

const SingleColor = ({ index, color }) => {
  const { hex, weight } = color
  const saveToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`)
        toast.success('Color copied to clipboard')
      } catch (error) {
        toast.error('Failed top copied to clipboard')
      }
    } else {
      toast.error('Clipboard access not available')
    }
  }
  return (
    <article
      className={`color ${index > 10 && 'color-light'}`}
      style={{ backgroundColor: `#${hex}` }}
      onClick={saveToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  )
}

export default SingleColor