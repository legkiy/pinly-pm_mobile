import { UniqEntity } from '.';

class RouterConfig {
  home = '/home';
  project(id: UniqEntity['id']) {
    return `/projects/${id}`;
  }
  createProject = '/editable-project';
}

export const ROUTER = new RouterConfig();
