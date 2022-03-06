import postcss from 'postcss'
import plug from './src'

// https://github.com/webuild-community/federated-blog/blob/main/components/Entry/Entry.module.css
const css = `.readMoreArea {
  display: flex;
}

.readMoreArea > * + * {
  margin-left: var(--spacing-base);
}

@media (max-width: 500px) {
  .readMoreArea {
    flex-direction: column;
  }
  .readMoreArea a {
    flex: 1;
    width: 100%;
  }
  .readMoreArea > * + * {
    margin: var(--spacing-base) 0 0 0;
  }
}

.entryAuthor {
  display: flex;
  align-items: center;
  margin-bottom: var(--spacing-base);
}

.entryAvatar {
  width: 48px;
  height: 48px;
  border: 1px solid var(--gray-1);
  border-radius: 50%;
  margin-right: 10px;
  overflow: hidden;
}`
postcss([plug()]).process(css).then(result => {
  console.log(result.toString())
})
