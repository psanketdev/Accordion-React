import React, { useState } from "react";
import SwitchHandler from "./SwitchHandler";
import './mode.css';

const DarkLightTheme = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <section className='acc-section' data-theme={isDark ? 'dark' : 'light'}>
      <div className="container">
        <h2>Dark Light Them</h2>
        <SwitchHandler isDark={isDark} changeMode={() => setIsDark(!isDark)} />
        <div className="mode-data">
          <h3>Hello, Lets talk about dark & light mode</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut velit consequuntur, quod earum corporis laboriosam ad iusto sint nesciunt, officiis voluptate tempore laborum sequi doloremque saepe! Temporibus unde beatae iusto reiciendis rem doloremque perspiciatis veritatis excepturi, amet aperiam aspernatur qui nemo laborum soluta. Animi nam odio obcaecati delectus, ab, quisquam maiores consequatur rem error accusamus quaerat aspernatur amet, assumenda est blanditiis! Accusantium amet officiis itaque ullam iusto laborum, necessitatibus at aut, iste excepturi architecto praesentium aliquid quo quidem aliquam earum, labore quas dignissimos? Praesentium saepe quidem maxime ipsa quod voluptatibus quos dolores, recusandae reiciendis explicabo natus placeat dolore excepturi labore obcaecati ut esse, aperiam voluptatum ipsam sequi? Cum, iusto maxime. Quasi quo incidunt dolore odit at ut, optio porro. Eum ullam et, a consequatur sunt deserunt dolorum laborum minima voluptas, dicta officiis, in fugiat ea illum. Illum iusto obcaecati, accusamus dignissimos accusantium eos tempore ipsa fugit esse libero qui consequatur! Sapiente eligendi asperiores voluptates dolor nihil laboriosam rem officiis, temporibus numquam eos velit voluptate dolorum. Quaerat atque, eveniet culpa qui explicabo provident laudantium sapiente facilis quasi nostrum sed, autem, consequatur sit. Praesentium aperiam dolore voluptas, laudantium impedit ex dicta! Itaque officia molestiae expedita unde nulla veniam harum culpa aliquam adipisci, quia ab quibusdam distinctio, modi fugiat consequatur inventore assumenda accusamus doloremque rerum dolorum voluptatem accusantium totam in. Quisquam, eum! Delectus quam tempora veniam dicta ea magnam molestiae commodi eum obcaecati autem deserunt officia iusto nostrum, quaerat tenetur quae, quos cum voluptatum dolorem similique enim voluptates nobis fugit! Ad eaque porro dolorem itaque minus reprehenderit repudiandae! Accusantium illum excepturi doloribus aperiam velit delectus temporibus asperiores ullam architecto, magni dolores veniam molestiae consectetur dolore error nemo aliquid culpa ut praesentium non dolorem eveniet quisquam saepe libero. Nam incidunt corrupti velit recusandae accusamus nostrum, libero nemo natus quia perferendis autem rem tempore architecto!</p>
        </div>
      </div>
    </section>
  );
};

export default DarkLightTheme;
