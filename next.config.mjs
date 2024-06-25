/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  compiler: (() => {
    let compilerConfig = {
      // styledComponents 활성화
      styledComponents: true,
    };

    if (process.env.NODE_ENV === "production") {
      compilerConfig = {
        ...compilerConfig,
        // 프러덕션 환경에서는 React Testing Library에서 사용하는 data-testid 속성을 삭제
        reactRemoveProperties: { properties: ["^data-testid$"] },
      };
    }

    return compilerConfig;
  })(),
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          {
            key: "Access-Control-Allow-Origin",
            value: "http://localhost:3000",
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://localhost:8080/api/:path*",
      },
    ];
  },
};

export default nextConfig;
