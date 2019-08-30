declare var process: NodeJS.Process;

interface Process {
  env: Env
}

interface Env {
  HOST_SECRETE: string
  VDAPP_UI_NAME: string
  VDAPP_DEV_URL: string
  VDAPP_PRD_URL: string
}

interface GlobalEnvironment {
  process: Process;
}
