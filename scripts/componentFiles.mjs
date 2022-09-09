import childProcess from "child_process";
import fs from "fs";
import util from "util";

const exec = util.promisify(childProcess.exec);

async function createComponentFiles({ serviceName, componentName }) {
  if (!serviceName || !componentName) {
    console.error("service name or component name is not valid");
    process.exit(1);
  }

  componentName = componentName[0].toUpperCase() + componentName.substring(1);

  const serviceDirectory =
    serviceName === "design-system" ? `./src/design-system` : `./src`;
  const componentDirectory = `${serviceDirectory}/components/${componentName}`;

  if (!fs.existsSync(serviceDirectory)) {
    console.error(`${serviceName} service directory does not exist`);
    process.exit(1);
  }

  if (fs.existsSync(componentDirectory)) {
    console.error(`${componentName} component directory already exists`);
    process.exit(1);
  }

  fs.mkdirSync(componentDirectory);

  const filesToGenerate = [
    {
      name: `${componentName}.stories.tsx`,
      content: `
        import type {Meta, StoryObj} from '@storybook/react';
        import {${componentName}} from './index';

        export default {
          component: ${componentName}
        } as Meta<typeof ${componentName}>

        export const 기본: StoryObj<typeof ${componentName}> = {};
      `,
    },
    {
      name: `${componentName}.test.tsx`,
      content: `
        import { screen } from '@testing-library/react';
        import { render } from '~/shared/utils';
        import {${componentName}} from './index';

        it.todo('테스트 케이스를 작성하세요 1');
        it.todo('테스트 케이스를 작성하세요 2');
      `,
    },
    {
      name: "styles.module.scss",
      content: "",
    },
    {
      name: "index.tsx",
      content: `
        import classNames from 'classnames/bind';
        import styles from './styles.module.scss';

        const cx = classNames.bind(styles);

        type ${componentName}Props = {};

        export const ${componentName} = () => {
          return <></>;
        }
      `,
    },
  ];

  filesToGenerate.forEach(({ name, content }) =>
    fs.writeFileSync(`${componentDirectory}/${name}`, content),
  );

  await exec(
    `eslint --fix ${componentDirectory} || prettier --write ${componentDirectory}`,
  );
}

createComponentFiles({
  serviceName: process.argv[2],
  componentName: process.argv[3],
});
