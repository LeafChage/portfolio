import React from 'react';
import './Profile.scss';


interface EmojiProps {
  label: string
  value: string
}

const Emoji: React.SFC<EmojiProps> = (props: EmojiProps) => (
  <span role="img" aria-label={props.label}>
    {props.value}
  </span>
);

const Profile: React.SFC = () => (
  <main id="profile">
    <div id="top">
      <img
        src="https://avatars2.githubusercontent.com/u/18657444?s=460&u=3c5563778bc80f0637307e0ddcaa3f14d285950a&v=4"
        alt="chage's icon"
      ></img>
      <h1>LeafChage</h1>
      <p>This is a profile, isn't this? What do you think?</p>
    </div>

    <div id="skillset">
      <h2>SkillSets</h2>
      <ul>
        <li>
          <p>
            <Emoji label="mouse" value="🐭" />
          </p>
          <p>Golang</p>
        </li>
        <li>
          <p>
            <Emoji label="elephant" value="🐘" />
          </p>
          <p> PHP </p>
        </li>
        <li>
          <p>
            <span className="blue-text">TS</span>
          </p>
          <p>TypeScript</p>
        </li>
        <li>
          <p>
            <Emoji label="game" value="🎮" />
          </p>
          <p>Unity with C#</p>
        </li>
        <li>
          <p>
            <Emoji label="bird" value="🕊" />
          </p>
          <p>Swift</p>
        </li>
      </ul>
    </div>

    <div id="products">
      <h2>Little Funny Products</h2>
      <ul>
        <li>
          This is so interesting game in the world.
          <a href="https://leafchage.github.io/FaceRolling/">FaceRolling</a>
        </li>
      </ul>
    </div>
  </main>
);

export default Profile;
