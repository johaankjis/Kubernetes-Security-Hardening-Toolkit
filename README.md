# Kubernetes Security Hardening Toolkit

A comprehensive web-based dashboard for monitoring and managing Kubernetes cluster security. This toolkit provides real-time visibility into security posture, vulnerability scanning, RBAC policies, pod security compliance, and audit log analysis.

## 🛡️ Overview

The Kubernetes Security Hardening Toolkit is a modern, responsive web application built with Next.js that helps DevOps and security teams maintain a secure Kubernetes infrastructure. It offers a centralized interface for monitoring security metrics, analyzing vulnerabilities, and managing security policies across your Kubernetes clusters.

## ✨ Features

### 1. **Security Dashboard**
- Real-time security score monitoring (0-100 scale)
- Key Performance Indicators (KPIs) tracking:
  - Overall security score
  - Critical vulnerability count
  - Pod compliance percentage
  - Active policy count
- Security overview with vulnerability distribution charts
- Compliance scores by category (Pod Security, Network Policies, RBAC, Secrets, Image Security)
- Recent activity feed
- Quick navigation links to detailed sections

### 2. **RBAC & Network Policies**
- Role-Based Access Control (RBAC) management
- Visualization of roles and role bindings
- Service account monitoring
- Network policy configuration and analysis
- Access control audit capabilities

### 3. **Vulnerability Scanning**
- Container image security analysis
- CVE (Common Vulnerabilities and Exposures) tracking
- Vulnerability severity classification:
  - Critical
  - High
  - Medium
  - Low
- Timeline view of vulnerability trends
- Image-specific vulnerability reports
- Severity-based filtering and sorting

### 4. **Pod Security Compliance**
- Pod Security Standards (PSS) enforcement monitoring
- Security policy compliance tracking
- Real-time pod security assessment
- Detailed security check results
- Non-compliant resource identification
- Security standards categorization (Privileged, Baseline, Restricted)

### 5. **Audit Log Monitoring**
- Kubernetes API server audit event tracking
- Comprehensive log filtering capabilities
- Audit event statistics and analytics
- Event categorization and severity levels
- Historical audit data analysis
- Suspicious activity detection

## 🏗️ Technology Stack

### Frontend Framework
- **Next.js 16.0.0** - React framework for production
- **React 19.2.0** - UI component library
- **TypeScript 5** - Type-safe development

### UI Components & Styling
- **Radix UI** - Accessible component primitives
- **Tailwind CSS 4.1.9** - Utility-first CSS framework
- **Lucide React** - Icon library
- **Recharts** - Charting library for data visualization
- **class-variance-authority** - CSS variant utilities
- **tailwindcss-animate** - Animation utilities

### Form Management
- **React Hook Form 7.60.0** - Form state management
- **Zod 3.25.76** - Schema validation
- **@hookform/resolvers** - Form validation resolvers

### Additional Libraries
- **next-themes** - Theme management (dark/light mode)
- **date-fns** - Date utility library
- **Sonner** - Toast notifications
- **cmdk** - Command menu component
- **@vercel/analytics** - Analytics integration

## 📁 Project Structure

```
Kubernetes-Security-Hardening-Toolkit/
├── app/                          # Next.js app directory
│   ├── audit-logs/              # Audit log monitoring page
│   ├── pod-security/            # Pod security compliance page
│   ├── rbac/                    # RBAC & network policies page
│   ├── vulnerabilities/         # Vulnerability scanning page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Main dashboard page
├── components/                   # React components
│   ├── ui/                      # Reusable UI components (Radix-based)
│   ├── audit-log-*.tsx          # Audit log related components
│   ├── dashboard-header.tsx     # Main dashboard header
│   ├── kpi-cards.tsx            # KPI metric cards
│   ├── quick-links.tsx          # Navigation quick links
│   ├── security-overview.tsx    # Security overview charts
│   ├── recent-activity.tsx      # Activity feed component
│   ├── vulnerability-*.tsx      # Vulnerability scanning components
│   ├── pod-*.tsx                # Pod security components
│   ├── rbac-*.tsx               # RBAC components
│   ├── roles-list.tsx           # Roles listing component
│   ├── service-accounts.tsx     # Service accounts component
│   ├── network-policies.tsx     # Network policies component
│   ├── theme-toggle.tsx         # Dark/light mode toggle
│   └── theme-provider.tsx       # Theme context provider
├── hooks/                        # Custom React hooks
│   ├── use-mobile.ts            # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
├── lib/                         # Utility libraries
│   └── utils.ts                 # Utility functions
├── public/                      # Static assets
│   └── *.svg, *.png, *.jpg     # Placeholder images and logos
├── styles/                      # Additional styles
├── components.json              # shadcn/ui configuration
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies
├── postcss.config.mjs           # PostCSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # Project documentation
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.x or higher
- **pnpm** (preferred) or npm/yarn package manager
- Modern web browser (Chrome, Firefox, Safari, Edge)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/johaankjis/Kubernetes-Security-Hardening-Toolkit.git
   cd Kubernetes-Security-Hardening-Toolkit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   # or
   yarn install
   ```

### Development

Start the development server:

```bash
pnpm dev
# or
npm run dev
# or
yarn dev
```

The application will be available at [http://localhost:3000](http://localhost:3000).

### Building for Production

Create an optimized production build:

```bash
pnpm build
# or
npm run build
# or
yarn build
```

### Running Production Build

Start the production server:

```bash
pnpm start
# or
npm start
# or
yarn start
```

### Linting

Run the linter to check code quality:

```bash
pnpm lint
# or
npm run lint
# or
yarn lint
```

## 🎨 Features in Detail

### Theme Support
The application supports both light and dark themes. Users can toggle between themes using the theme toggle button in the header. The theme preference is persisted across sessions.

### Responsive Design
The dashboard is fully responsive and optimized for:
- Desktop screens (1920px and above)
- Laptops (1024px - 1919px)
- Tablets (768px - 1023px)
- Mobile devices (320px - 767px)

### Data Visualization
- **Pie Charts**: Vulnerability distribution
- **Bar Charts**: Compliance scores by category
- **Line Charts**: Trend analysis over time
- **Statistical Cards**: Real-time KPI metrics

### Navigation
- Clean, intuitive navigation with quick links
- Breadcrumb navigation for deep pages
- Contextual navigation within sections

## 🔧 Configuration

### Next.js Configuration
The `next.config.mjs` file includes:
- TypeScript build error ignoring (for development flexibility)
- Image optimization disabled (for static hosting compatibility)

### TypeScript Configuration
- Strict mode enabled for type safety
- Path aliases configured (`@/*` maps to root directory)
- ES6 target compilation

### Tailwind CSS
Custom theme configuration with:
- Custom color palette
- Animation utilities
- Responsive breakpoints
- Dark mode support

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### Code Style
- Follow TypeScript best practices
- Use ESLint for code quality
- Write meaningful commit messages
- Add comments for complex logic
- Maintain consistent formatting

### Testing
Before submitting a PR:
- Ensure the build completes successfully
- Run the linter and fix any issues
- Test on multiple screen sizes
- Verify both light and dark themes

## 📝 Use Cases

### Security Teams
- Monitor overall cluster security posture
- Identify and prioritize vulnerability remediation
- Track compliance with security standards
- Audit access control configurations

### DevOps Engineers
- Validate security policies before deployment
- Monitor pod security compliance
- Manage RBAC and network policies
- Investigate security incidents through audit logs

### Platform Engineers
- Enforce security standards across teams
- Generate security reports for stakeholders
- Implement automated security checks
- Maintain security documentation

## 🔒 Security Considerations

This is a monitoring and visualization tool. For actual Kubernetes cluster integration:
- Implement proper authentication and authorization
- Use secure API endpoints
- Enable audit logging
- Follow the principle of least privilege
- Regularly update dependencies
- Implement rate limiting
- Use HTTPS in production

## 📊 Data Sources

The current implementation uses mock data for demonstration purposes. In a production environment, integrate with:
- Kubernetes API server
- Vulnerability scanning tools (Trivy, Clair, Anchore)
- Audit log aggregation systems
- Policy enforcement engines (OPA, Kyverno)
- Monitoring systems (Prometheus, Grafana)

## 🗺️ Roadmap

Future enhancements may include:
- [ ] Real-time Kubernetes cluster integration
- [ ] Advanced filtering and search capabilities
- [ ] Customizable dashboards
- [ ] Export reports (PDF, CSV)
- [ ] Alert configuration and notifications
- [ ] Policy templates and recommendations
- [ ] Multi-cluster support
- [ ] User authentication and role management
- [ ] API for programmatic access
- [ ] Integration with CI/CD pipelines

## 📄 License

This project is available for use under standard open-source practices. Please check with the repository owner for specific licensing terms.

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- UI components from [Radix UI](https://www.radix-ui.com/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons from [Lucide](https://lucide.dev/)
- Charts powered by [Recharts](https://recharts.org/)

## 📞 Support

For issues, questions, or contributions:
- Open an issue on GitHub
- Submit a pull request
- Check existing documentation

---

**Note**: This toolkit is designed for monitoring and visualization purposes. Always follow your organization's security policies and compliance requirements when implementing security controls in production Kubernetes environments.
