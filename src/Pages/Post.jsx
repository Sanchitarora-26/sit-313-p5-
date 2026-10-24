import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const MAX_TAGS = 3;

function parseTags(value) {
  return value
    .split(',')
    .map((tag) => tag.trim())
    .filter(Boolean);
}

function Post() {
  const [postType, setPostType] = useState('question');
  const [title, setTitle] = useState('');
  const [questionText, setQuestionText] = useState('');
  const [abstractText, setAbstractText] = useState('');
  const [articleText, setArticleText] = useState('');
  const [tagsText, setTagsText] = useState('');
  const [notice, setNotice] = useState(null);

  const tags = parseTags(tagsText);
  const titleValid = title.trim().length >= 8 && title.trim().length <= 120;
  const tagsValid =
    tags.length >= 1 &&
    tags.length <= MAX_TAGS &&
    tags.every((tag) => tag.length <= 25) &&
    new Set(tags.map((tag) => tag.toLowerCase())).size === tags.length;

  function handleTypeChange(event) {
    setPostType(event.target.value);
    setNotice(null);
  }

  function handleSubmit(event) {
    event.preventDefault();

    const errors = [];
    if (!titleValid) errors.push('Title must contain 8–120 characters.');
    if (!tagsValid) errors.push('Enter 1–3 comma-separated tags. Each tag must be 25 characters or fewer, and tags must be unique.');

    if (postType === 'question') {
      if (questionText.trim().length < 20) {
        errors.push('Question description must contain at least 20 characters.');
      }
    } else {
      if (abstractText.trim().length < 30 || abstractText.trim().length > 300) {
        errors.push('Abstract must contain 30–300 characters.');
      }
      if (articleText.trim().length < 50) {
        errors.push('Article text must contain at least 50 characters.');
      }
    }

    if (errors.length) {
      setNotice({ type: 'error', text: errors.join(' ') });
      return;
    }

    // This task does not persist posts. The success popup demonstrates the required UI.
    setNotice({
      type: 'success',
      text: `Your ${postType} has been validated and sent (demo only). No post has been saved to a server.`
    });
    window.alert(`Success: your ${postType} has been validated. (Demo only; no data was saved.)`);
  }

  return (
    <>
      <Header />
      <main className="post-page">
        <div className="post-page-heading">
          <p className="eyebrow">DEV@Deakin / Chitkara</p>
          <h1>New Post</h1>
          <p>Share a question with the community or publish an article.</p>
        </div>

        <form className="post-form" onSubmit={handleSubmit} noValidate>
          <section className="post-panel">
            <h2>New Post</h2>
            <fieldset className="post-type-fieldset">
              <legend>Select Post Type:</legend>
              <label>
                <input
                  type="radio"
                  name="postType"
                  value="question"
                  checked={postType === 'question'}
                  onChange={handleTypeChange}
                />
                Question
              </label>
              <label>
                <input
                  type="radio"
                  name="postType"
                  value="article"
                  checked={postType === 'article'}
                  onChange={handleTypeChange}
                />
                Article
              </label>
            </fieldset>

            <div className="post-section-title">
              <h2>What do you want to ask or share</h2>
            </div>
            <p className="post-helper">
              This section changes depending on the type of post you select.
              {postType === 'question' ? (
                <strong> For a question, describe the problem you need help with.</strong>
              ) : (
                <strong> For an article, provide an abstract and the full article text.</strong>
              )}
            </p>

            <div className="post-field">
              <label htmlFor="post-title">Title</label>
              <input
                id="post-title"
                type="text"
                value={title}
                onChange={(event) => setTitle(event.target.value)}
                placeholder={postType === 'question' ? 'Start your question with how, what, why, etc.' : 'Enter a descriptive title'}
                minLength={8}
                maxLength={120}
                required
                aria-describedby="title-help"
              />
              <small id="title-help">8–120 characters.</small>
            </div>

            {postType === 'question' ? (
              <div className="post-field">
                <label htmlFor="question-description">Describe your problem</label>
                <textarea
                  id="question-description"
                  value={questionText}
                  onChange={(event) => setQuestionText(event.target.value)}
                  placeholder="Explain what you tried and where you need help..."
                  rows={9}
                  minLength={20}
                  required
                />
                <small>At least 20 characters.</small>
              </div>
            ) : (
              <>
                <div className="post-field">
                  <label htmlFor="article-abstract">Abstract</label>
                  <textarea
                    id="article-abstract"
                    value={abstractText}
                    onChange={(event) => setAbstractText(event.target.value)}
                    placeholder="Enter a short one-paragraph abstract"
                    rows={3}
                    minLength={30}
                    maxLength={300}
                    required
                  />
                  <small>30–300 characters.</small>
                </div>
                <div className="post-field">
                  <label htmlFor="article-text">Article Text</label>
                  <textarea
                    id="article-text"
                    value={articleText}
                    onChange={(event) => setArticleText(event.target.value)}
                    placeholder="Write your article here..."
                    rows={9}
                    minLength={50}
                    required
                  />
                  <small>At least 50 characters.</small>
                </div>
              </>
            )}

            <div className="post-field post-tags-field">
              <label htmlFor="post-tags">Tags</label>
              <input
                id="post-tags"
                type="text"
                value={tagsText}
                onChange={(event) => setTagsText(event.target.value)}
                placeholder="Add up to 3 comma-separated tags, e.g. Java, React"
                required
                aria-describedby="tags-help"
              />
              <small id="tags-help">Use 1–3 unique tags separated by commas.</small>
            </div>

            {notice && (
              <div className={`post-notice ${notice.type}`} role="status" aria-live="polite">
                <strong>{notice.type === 'success' ? 'Success' : 'Please check your post'}:</strong> {notice.text}
              </div>
            )}

            <div className="post-actions">
              <button className="post-submit" type="submit">Post</button>
            </div>
          </section>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Post;
