// ============================================
// DESIGN AID SERVICE DETAILS - VERCEL READY
// Fixed image paths for deployment
// ============================================

(function() {
    'use strict';
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    function init() {
        console.log('Service Detail: Initializing for Vercel...');
        
        // DETECT BASE PATH - Works on Vercel, GitHub Pages, localhost
        var basePath = window.location.pathname;
        var pathParts = basePath.split('/');
        // Remove last part if it's a file
        if (pathParts[pathParts.length - 1].includes('.')) {
            pathParts.pop();
        }
        // Remove empty strings
        pathParts = pathParts.filter(function(p) { return p; });
        
        // Build base URL
        var isGitHubPages = window.location.hostname.includes('github.io');
        var baseUrl = '';
        
        if (isGitHubPages && pathParts.length > 0) {
            // GitHub Pages: /repo-name/
            baseUrl = '/' + pathParts[0] + '/';
        } else {
            // Vercel or root: just use root
            baseUrl = '/';
        }
        
        console.log('Base URL detected:', baseUrl);
        
        var cards = document.querySelectorAll('.service-card');
        console.log('Found cards:', cards.length);
        
        if (cards.length === 0) {
            console.error('No service cards found!');
            return;
        }
        
        // IMAGE CONFIGURATION - USE ABSOLUTE PATHS
        var images = {
            'npd': {
                hero: baseUrl + 'images/npd-hero.jpg',
                projects: [
                    baseUrl + 'images/garbage-compactor.jpg',
                    baseUrl + 'images/bus-interior.jpg',
                    baseUrl + 'images/ev-motor.jpg',
                    baseUrl + 'images/food-station.jpg',
                    baseUrl + 'images/pulse-huller.jpg',
                    baseUrl + 'images/gearbox.jpg'
                ]
            },
            'material-handling': {
                hero: baseUrl + 'images/mh-hero.jpg',
                projects: [
                    baseUrl + 'images/conveyor.jpg',
                    baseUrl + 'images/trolley.jpg',
                    baseUrl + 'images/turnover.jpg'
                ]
            },
            'reverse-engineering': {
                hero: baseUrl + 'images/re-hero.jpg',
                projects: [
                    baseUrl + 'images/rear-axle.jpg',
                    baseUrl + 'images/aerospace-part.jpg',
                    baseUrl + 'images/consumer-product.jpg'
                ]
            },
            'aerospace': {
                hero: baseUrl + 'images/ad-hero.jpg',
                projects: [
                    baseUrl + 'images/forging-tools.jpg',
                    baseUrl + 'images/assembly-jig.jpg',
                    baseUrl + 'images/conversion-2d3d.jpg'
                ]
            },
            'costing': {
                hero: baseUrl + 'images/costing-hero.jpg',
                projects: []
            },
            'staffing': {
                hero: baseUrl + 'images/staffing-hero.jpg',
                projects: [
                    baseUrl + 'images/training-class.jpg',
                    baseUrl + 'images/placement.jpg'
                ]
            }
        };
        
        var services = [
            {
                id: 'npd',
                title: 'New Product Development',
                tagline: 'From Concept to Market',
                icon: 'rocket',
                color: '#0066ff',
                overview: 'Design AID Engineering has collaboratively delivered 15+ new products through end-to-end new product development, encompassing engineering design, prototype fabrication, testing and validation, manufacturing, and execution.',
                description: 'Over the past four months, AID Engineering has exported production parts and engineered components to the Indian market. Our on-demand manufacturing services allow customers to order precisely what they need, when they need it.',
                stats: [
                    {value: '15+', label: 'Products'},
                    {value: '4', label: 'Months Export'},
                    {value: '100%', label: 'End-to-End'}
                ],
                features: ['Engineering Design & CAD', 'Prototype Fabrication', 'Testing & Validation', 'Manufacturing Execution', 'Export Documentation', 'On-Demand Production'],
                deliverables: ['3D CAD Models', 'Functional Prototypes', 'Test Reports', 'Manufacturing Drawings', 'Quality Plans'],
                projects: [
                    {title: 'Garbage Compactor', category: 'Transportation', desc: 'Heavy-duty waste management system'},
                    {title: 'Bus Interior Design', category: 'Transportation', desc: 'Commercial vehicle interior'},
                    {title: 'Single Reduction EV', category: 'Transportation', desc: 'EV drivetrain development'},
                    {title: 'Food Serving Station', category: 'Consumer', desc: 'Automated food equipment'},
                    {title: 'Pulse Huller Machine', category: 'Agricultural', desc: 'Processing machinery'},
                    {title: 'Casting Gearbox', category: 'Aerospace', desc: 'Aerospace transmission'}
                ]
            },
            {
                id: 'material-handling',
                title: 'Material Handling',
                tagline: 'Optimize Your Workflow',
                icon: 'dolly',
                color: '#d4af37',
                overview: 'Material handling involves the systematic planning, execution, and control of processes associated with the movement, storage, protection, and management of materials and products.',
                description: 'We ensure efficient, safe, and timely flow of materials while optimizing operational costs and enhancing productivity.',
                stats: [
                    {value: '100%', label: 'Safety'},
                    {value: 'Custom', label: 'Solutions'},
                    {value: '24/7', label: 'Support'}
                ],
                features: ['Systematic Planning', 'Storage Systems', 'Distribution Management', 'Cost Optimization', 'Safety Enhancement', 'SPM Design'],
                deliverables: ['System Designs', 'Equipment Drawings', 'Safety Reports', 'Installation Guides'],
                projects: [
                    {title: 'Side Conveyor', category: 'Automotive', desc: 'Line-side delivery system'},
                    {title: 'Industrial Trolley', category: 'Warehouse', desc: 'Heavy-load transport'},
                    {title: '90° Turnover', category: 'Manufacturing', desc: 'Component orientation'}
                ],
                industries: ['Automotive', 'Bulk Material', 'Warehouse']
            },
            {
                id: 'reverse-engineering',
                title: 'Reverse Engineering',
                tagline: 'Unlock Design Value',
                icon: 'undo-alt',
                color: '#00d4ff',
                overview: 'Successfully executed 10+ projects across aerospace, automotive, consumer goods, and industrial sectors.',
                description: 'We unlock design reuse opportunities, optimize product costs, and enhance functionality while achieving faster turnaround times.',
                stats: [
                    {value: '10+', label: 'Projects'},
                    {value: '4', label: 'Industries'},
                    {value: '100%', label: 'Docs'}
                ],
                features: ['3D Scanning', 'GD&T Analysis', 'Material Specs', 'Heat Treatment Analysis', 'BOM Development', 'Cost Optimization'],
                deliverables: ['3D CAD Models', 'Manufacturing Drawings', 'Material Reports', 'Assembly Docs', 'Complete BOM'],
                projects: [
                    {title: '2T Rear Axle', category: 'Automotive', desc: 'LCV axle reconstruction'},
                    {title: 'Aerospace Part', category: 'Aerospace', desc: 'Legacy digitization'},
                    {title: 'Consumer Product', category: 'Consumer', desc: 'Competitive analysis'}
                ]
            },
            {
                id: 'aerospace',
                title: 'Aerospace & Defence',
                tagline: 'Precision Without Compromise',
                icon: 'plane',
                color: '#ff6b35',
                overview: 'Integrated team of tooling designers specializing in aero forging and assembly tooling.',
                description: 'Expertise covers detailed, assembly, and installation tooling ensuring precision, repeatability, and compliance with aerospace standards.',
                stats: [
                    {value: 'AS9100', label: 'Compliant'},
                    {value: 'Full', label: 'Spectrum'},
                    {value: '99.9%', label: 'Precision'}
                ],
                features: ['Standards Compliance', 'GD&T Implementation', 'Tooling Design', 'Fixture Development', 'Drill Jigs', 'Installation Planning'],
                deliverables: ['3D Tooling Models', 'Assembly Drawings', 'Installation Guides', 'Tooling Plans', 'GD&T Docs'],
                projects: [
                    {title: 'Aero Forging', category: 'Tooling', desc: 'High-temp die sets'},
                    {title: 'Assembly Jigs', category: 'Fixtures', desc: 'Determinant assembly'},
                    {title: '2D to 3D', category: 'Digital', desc: 'Legacy modernization'}
                ],
                capabilities: {
                    'Forging Tool Design': 'Complete tooling for aero forging',
                    '2D to 3D Conversion': 'Digital transformation',
                    'Assembly Tooling': 'Jigs and fixtures',
                    'Installation Aids': 'Precision installation'
                },
                process: ['Interpret 2D drawings', 'Create 3D CAD models', 'Apply tolerances', 'Develop assemblies', 'Validate manufacturability']
            },
            {
                id: 'costing',
                title: 'Should Cost Analysis',
                tagline: 'Data-Driven Optimization',
                icon: 'calculator',
                color: '#10b981',
                overview: 'In today\'s competitive environment, manufacturers face continuous pressure on profit margins.',
                description: 'We develop transparent, data-driven cost models helping you optimize product costs and maximize market share.',
                stats: [
                    {value: '10+', label: 'Years'},
                    {value: '30%', label: 'Savings'},
                    {value: '100%', label: 'Transparent'}
                ],
                features: ['Cost Analysis', 'Driver Identification', 'Process Optimization', 'Design Strategy', 'Market Analysis', 'Validation'],
                deliverables: ['Cost Breakdown', 'Optimization Roadmap', 'Technology Recommendations', 'Design Guidelines'],
                approach: ['Cost element analysis', 'Early optimization', 'Data-driven models', 'Customer handholding', 'Business alignment']
            },
            {
                id: 'staffing',
                title: 'Staffing & Training',
                tagline: 'Build Your Team',
                icon: 'users',
                color: '#8b5cf6',
                overview: 'We simplify hiring by connecting you with high-impact engineering talent.',
                description: 'Proactive talent acquisition for engineering and manufacturing ecosystem.',
                stats: [
                    {value: 'Proactive', label: 'Hiring'},
                    {value: '6 Mo', label: 'Training'},
                    {value: '100%', label: 'Placement'}
                ],
                features: ['Niche Expertise', 'Talent Pipeline', 'Technical Assessment', 'Executive Search', 'Training Programs', 'Placement Support'],
                deliverables: ['Qualified Candidates', 'Skill Assessments', 'Certificates', 'Portfolios', 'Placement Assistance'],
                staffing: {
                    title: 'Engineering Staffing',
                    desc: 'Mechanical engineers and technical support for projects and organizations.',
                    points: ['Technical requirements analysis', 'Project scope review', 'Strategic alignment', 'Rigorous selection', 'Quality assurance']
                },
                training: {
                    title: 'Training & Placement',
                    duration: '6 Months',
                    desc: 'Industry-oriented mechanical design training with job assurance.',
                    tools: ['Inventor, SolidWorks, Creo, NX', 'SolidWorks/Ansys', 'Engineering refresh', 'Live projects'],
                    prereq: 'B.E. Mech/Auto Graduates',
                    curriculum: ['Industry Standards', 'Part Design', 'Assembly Design', 'Surface Design', 'Sheet Metal', '2D to 3D', 'Drafting', 'FEA', 'DFX', 'NPD', 'Projects', 'Soft Skills'],
                    outcome: 'Job Assurance'
                },
                projects: [
                    {title: 'Training Program', category: 'Education', desc: 'Hands-on CAD training'},
                    {title: 'Placement Support', category: 'Career', desc: 'Job placement assistance'}
                ]
            }
        ];
        
        var overlay = document.createElement('div');
        overlay.id = 'da-service-overlay';
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:#0a0e27;z-index:99999;display:none;overflow-y:auto;';
        overlay.innerHTML = '<div id="da-overlay-content"></div>';
        document.body.appendChild(overlay);
        
        var styles = document.createElement('style');
        styles.textContent = `
            #da-service-overlay { font-family: 'Inter', sans-serif; color: white; }
            #da-service-overlay * { box-sizing: border-box; }
            
            .da-close { position: fixed; top: 30px; left: 30px; z-index: 100000; background: rgba(255,255,255,0.1); border: 1px solid rgba(255,255,255,0.2); color: white; padding: 12px 24px; border-radius: 50px; cursor: pointer; font-size: 14px; font-weight: 600; backdrop-filter: blur(10px); transition: all 0.3s; }
            .da-close:hover { background: rgba(255,255,255,0.2); transform: translateX(-5px); }
            
            .da-hero { 
                min-height: 85vh; 
                display: flex; 
                align-items: center; 
                padding: 100px 60px 60px; 
                position: relative; 
                background-size: cover;
                background-position: center;
            }
            .da-hero-overlay {
                position: absolute;
                inset: 0;
                background: linear-gradient(135deg, rgba(10,14,39,0.95) 0%, rgba(10,14,39,0.8) 50%, rgba(10,14,39,0.6) 100%);
            }
            .da-hero-content { 
                position: relative;
                z-index: 2;
                max-width: 1400px; 
                margin: 0 auto; 
                width: 100%; 
            }
            
            .da-label { color: #d4af37; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 3px; margin-bottom: 20px; display: inline-block; padding: 10px 20px; background: rgba(212,175,55,0.1); border-radius: 50px; border: 1px solid rgba(212,175,55,0.3); }
            .da-title { font-family: "Playfair Display", serif; font-size: clamp(40px, 5vw, 72px); font-weight: 700; margin-bottom: 20px; line-height: 1.1; }
            .da-tagline { font-size: 24px; opacity: 0.9; margin-bottom: 40px; max-width: 600px; }
            .da-stats { display: flex; gap: 40px; flex-wrap: wrap; }
            .da-stat { text-align: center; padding: 20px 30px; background: rgba(255,255,255,0.05); border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
            .da-stat-num { display: block; font-size: 42px; font-weight: 800; color: #0066ff; line-height: 1; margin-bottom: 5px; }
            .da-stat-label { font-size: 12px; text-transform: uppercase; letter-spacing: 1px; opacity: 0.8; }
            
            .da-body { max-width: 1400px; margin: 0 auto; padding: 60px; display: grid; grid-template-columns: 1fr 350px; gap: 60px; }
            .da-main { color: white; }
            .da-section { margin-bottom: 60px; }
            .da-section h2 { font-family: "Playfair Display", serif; font-size: 32px; margin-bottom: 24px; padding-bottom: 15px; border-bottom: 3px solid #0066ff; display: inline-block; }
            .da-lead { font-size: 20px; line-height: 1.7; margin-bottom: 15px; opacity: 0.95; }
            .da-text { font-size: 16px; line-height: 1.8; opacity: 0.7; }
            
            .da-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; }
            .da-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; }
            
            .da-item { background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1); display: flex; align-items: center; gap: 12px; }
            .da-item::before { content: "✓"; color: #0066ff; font-weight: bold; font-size: 18px; }
            .da-item:hover { background: rgba(0,102,255,0.1); border-color: #0066ff; transform: translateX(5px); transition: all 0.3s; }
            
            .da-project { 
                background: rgba(255,255,255,0.05); 
                border-radius: 16px; 
                overflow: hidden; 
                border: 1px solid rgba(255,255,255,0.1); 
                transition: all 0.3s; 
            }
            .da-project:hover { 
                transform: translateY(-10px); 
                border-color: #0066ff; 
                box-shadow: 0 20px 40px rgba(0,0,0,0.3);
            }
            .da-project-img-wrap {
                height: 200px;
                overflow: hidden;
                position: relative;
                background: linear-gradient(135deg, #1a1f4b, #0a0e27);
            }
            .da-project-img-wrap img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                transition: transform 0.5s;
            }
            .da-project:hover .da-project-img-wrap img {
                transform: scale(1.1);
            }
            .da-project-fallback {
                position: absolute;
                inset: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 48px;
                color: rgba(255,255,255,0.1);
            }
            .da-project-info { padding: 24px; }
            .da-project-cat { color: #d4af37; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; font-weight: 700; margin-bottom: 8px; }
            .da-project-title { font-family: "Playfair Display", serif; font-size: 20px; margin-bottom: 10px; font-weight: 600; }
            .da-project-desc { font-size: 14px; opacity: 0.7; line-height: 1.5; }
            
            .da-side { position: sticky; top: 100px; height: fit-content; }
            .da-box { background: rgba(255,255,255,0.05); border-radius: 20px; padding: 30px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.1); }
            .da-box h3 { font-family: "Playfair Display", serif; font-size: 20px; margin-bottom: 20px; }
            
            .da-nav-item { 
                padding: 14px; 
                margin-bottom: 8px; 
                border-radius: 10px; 
                cursor: pointer; 
                opacity: 0.7; 
                border-left: 3px solid transparent; 
                display: flex; 
                align-items: center; 
                gap: 12px; 
                transition: all 0.3s;
            }
            .da-nav-item:hover, .da-nav-item.active { 
                background: rgba(0,102,255,0.1); 
                opacity: 1; 
                border-left-color: #0066ff; 
            }
            
            .da-nav-icon {
                width: 24px;
                height: 24px;
                flex-shrink: 0;
                color: #d4af37;
            }
            
            .da-btn { 
                display: flex; 
                align-items: center; 
                justify-content: center; 
                gap: 10px; 
                width: 100%; 
                padding: 16px; 
                border-radius: 10px; 
                text-decoration: none; 
                font-weight: 700; 
                margin-bottom: 10px; 
                transition: all 0.3s; 
            }
            .da-btn-wa { background: #25D366; color: white; }
            .da-btn-call { background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); }
            .da-btn:hover { transform: translateY(-3px); }
            
            .da-cap-item { background: rgba(255,255,255,0.05); padding: 24px; border-radius: 16px; border: 1px solid rgba(255,255,255,0.1); }
            .da-cap-item h4 { color: #d4af37; margin-bottom: 10px; font-size: 18px; }
            .da-cap-item p { opacity: 0.7; font-size: 14px; line-height: 1.6; }
            
            .da-step { display: flex; align-items: center; gap: 16px; padding: 20px; background: rgba(255,255,255,0.05); border-radius: 12px; margin-bottom: 12px; }
            .da-step-num { width: 40px; height: 40px; background: #0066ff; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 800; flex-shrink: 0; }
            
            .da-tag { display: inline-block; padding: 10px 20px; border: 2px solid #0066ff; color: #0066ff; border-radius: 50px; font-weight: 700; margin: 5px; }
            
            .da-image-error { 
                display: none; 
                padding: 20px; 
                background: rgba(255,0,0,0.1); 
                border: 1px solid rgba(255,0,0,0.3); 
                border-radius: 8px; 
                margin-bottom: 20px;
                font-size: 14px;
                color: #ff6b6b;
            }
            
            @media (max-width: 1100px) {
                .da-body { grid-template-columns: 1fr; }
                .da-side { position: static; order: -1; }
                .da-grid-2, .da-grid-3 { grid-template-columns: 1fr; }
                .da-hero { min-height: auto; padding: 100px 30px 40px; }
                .da-body { padding: 40px 30px; }
                .da-project-img-wrap { height: 250px; }
            }
        `;
        document.head.appendChild(styles);
        
        // SVG Icons
        var icons = {
            'rocket': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="da-nav-icon"><path d="M156.6 384.9L125.7 353.1C117.2 345.5 112 334.6 112 323.1V307.6c8.2-8.2 18.6-14.2 29.9-17.4 11.1-3.1 22.8-3.1 33.9 0l28.7 8.1 61.5-61.5-51.2-51.2c-5.5-5.5-13.7-6.9-20.6-3.5l-33.4 16.7C101.9 191.2 96 207.8 96 224.6V243c0 10.3 2.8 20.5 8.1 29.4l63.3 105.8c9.3 15.5 25.9 24.9 43.7 24.9h78.9c12.8 0 24.5-7.3 30.2-18.8l15.2-30.4c3.8-7.6 3.8-16.5 0-24.1l-63.3-126.6-45.3 45.3zM464 256c0-114.9-93.1-208-208-208S48 141.1 48 256s93.1 208 208 208c12.3 0 24-1.1 35.5-3.1-7.7-13.3-12.5-28.5-12.5-44.7V266.4c0-15.2-6.4-29.7-17.7-40C299.8 219.3 305.6 208 320 208h16c17.7 0 32 14.3 32 32v42.7c0 33.5 16.1 63.5 41.1 82.5C445.4 343.5 464 301.7 464 256z"/></svg>',
            'dolly': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="da-nav-icon"><path d="M234.7 42.7L197 12.4c-9.5-7.5-22.9-5.7-30.3 4.1L46.3 171.6c-6.7 8.6-6.1 20.9 1.5 28.9l56.7 62.2c7.5 8.2 20.2 8.9 28.5 1.5l67.3-61.1c22.2-20.2 56.8-18.8 77.6 3.1l4.1 4.1c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-4.1-4.1c-35.6-35.6-93-37.5-128.9-1.6l-51.3 46.7-39.6-43.5L234.7 42.7zM256 224c0-17.7 14.3-32 32-32s32 14.3 32 32v98.9c0 17.7-14.3 32-32 32s-32-14.3-32-32V224zm-64 96c0-17.7 14.3-32 32-32s32 14.3 32 32v64c0 17.7-14.3 32-32 32s-32-14.3-32-32v-64zm128 96c0-17.7 14.3-32 32-32s32 14.3 32 32v16c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16zm-128 0c0-17.7 14.3-32 32-32s32 14.3 32 32v16c0 17.7-14.3 32-32 32s-32-14.3-32-32v-16zm256 16c0 53-43 96-96 96s-96-43-96-96 43-96 96-96 96 43 96 96z"/></svg>',
            'undo-alt': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" class="da-nav-icon"><path d="M48.5 224H40c-13.3 0-24-10.7-24-24V72c0-9.7 5.8-18.5 14.8-22.2s19.3-1.7 26.2 5.2L98.6 96.6c87.6-86.5 228.7-86.2 315.8 1c87.5 87.5 87.5 229.3 0 316.8s-229.3 87.5-316.8 0c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0c62.5 62.5 163.8 62.5 226.3 0s62.5-163.8 0-226.3c-62.2-62.2-162.7-62.5-225.3-1L185 183c6.9 6.9 8.9 17.2 5.2 26.2s-12.5 14.8-22.2 14.8H48.5z"/></svg>',
            'plane': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" fill="currentColor" class="da-nav-icon"><path d="M482.3 192c34.2 0 93.7 29.2 93.7 65.3 0 25.7-21.2 46.6-47.8 49.3l-63.3 6.8-27.5 55c-5.7 11.4-17.4 18.8-30.4 18.8l-54.3 0-36.1 72.5c-5 9.9-15.3 16.2-26.6 16.2l-56.7 0c-10.3 0-19.6-5.6-24.5-14.6l-61.3-114.9L22.6 256l86.4 0c10.7 0 20.7-5.3 26.6-14.1l41.5-69.2-62.1-104.1C109.8 61.3 99.8 56 89.1 56L32 56C14.3 56 0 41.7 0 24S14.3-8 32-8l57.1 0c31.4 0 60.8 16.7 76.6 43.8L222.9 157.8l50.9-84.8C282.3 59.8 295.6 48 311.5 48l44.6 0c13.4 0 25.2 8.6 29.3 21.3l22.8 68.4 60.6 6.6c18.3 2 32.5 17.1 32.5 35.5v1.3z"/></svg>',
            'calculator': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" class="da-nav-icon"><path d="M384 0H64C28.7 0 0 28.7 0 64v384c0 35.3 28.7 64 64 64h320c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64zM96 400c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48zm0-128c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48zm0-128c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48zm128 256c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48zm0-128c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48zm0-128c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16v-48c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v48zm128 256c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V176c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v272zm0-256c0 8.8-7.2 16-16 16h-32c-8.8 0-16-7.2-16-16V80c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v144z"/></svg>',
            'users': '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor" class="da-nav-icon"><path d="M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.2 96H0V298.7zM405.3 320c26.5-23.5 43.2-57.8 43.2-96c0-7.6-.6-15-1.9-22.3c13.6-6.2 28.7-9.7 44.6-9.7h42.7c58.9 0 106.7 47.8 106.7 106.7V384H405.3V320zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM384 464c0 26.5-21.5 48-48 48H304c-26.5 0-48-21.5-48-48V384H384v80z"/></svg>'
        };
        
        cards.forEach(function(card, index) {
            card.style.cursor = 'pointer';
            
            card.addEventListener('click', function(e) {
                if (e.target.tagName === 'A' || e.target.closest('a')) {
                    return;
                }
                
                var service = services[index];
                if (service) {
                    openOverlay(service, services, images, icons);
                }
            });
        });
        
        function openOverlay(service, allServices, imageConfig, iconConfig) {
            var content = document.getElementById('da-overlay-content');
            var overlay = document.getElementById('da-service-overlay');
            var serviceImages = imageConfig[service.id] || {hero: '', projects: []};
            
            // Debug info
            console.log('Opening service:', service.id);
            console.log('Hero image path:', serviceImages.hero);
            
            var html = '';
            
            // Close button
            html += '<button class="da-close" onclick="closeServiceOverlay()">← Back to Services</button>';
            
            // Debug panel (hidden by default, shown if images fail)
            html += '<div id="da-debug" class="da-image-error" style="display:none;"></div>';
            
            // HERO WITH BACKGROUND IMAGE
            var heroUrl = serviceImages.hero || '';
            var heroStyle = heroUrl ? 
                'background-image: url(' + heroUrl + '); background-size: cover; background-position: center;' : 
                'background: linear-gradient(135deg, #0a0e27, #1a1f4b);';
            
            html += '<div class="da-hero" style="' + heroStyle + '">';
            html += '<div class="da-hero-overlay"></div>';
            html += '<div class="da-hero-content">';
            html += '<span class="da-label">Service Details</span>';
            html += '<h1 class="da-title">' + service.title + '</h1>';
            html += '<p class="da-tagline">' + service.tagline + '</p>';
            html += '<div class="da-stats">';
            service.stats.forEach(function(stat) {
                html += '<div class="da-stat"><span class="da-stat-num">' + stat.value + '</span><span class="da-stat-label">' + stat.label + '</span></div>';
            });
            html += '</div></div></div>';
            
            // Body
            html += '<div class="da-body">';
            html += '<div class="da-main">';
            
            // Image path info for debugging
            if (heroUrl) {
                html += '<script>console.log("Loading hero from: ' + heroUrl + '");</script>';
            }
            
            // Overview
            html += '<div class="da-section">';
            html += '<h2>Overview</h2>';
            html += '<p class="da-lead">' + service.overview + '</p>';
            html += '<p class="da-text">' + service.description + '</p>';
            html += '</div>';
            
            // Capabilities
            if (service.capabilities) {
                html += '<div class="da-section"><h2>Capabilities</h2><div class="da-grid-2">';
                for (var key in service.capabilities) {
                    html += '<div class="da-cap-item"><h4>' + key + '</h4><p>' + service.capabilities[key] + '</p></div>';
                }
                html += '</div></div>';
            }
            
            // Approach
            if (service.approach) {
                html += '<div class="da-section"><h2>Our Approach</h2><div class="da-grid-2">';
                service.approach.forEach(function(item) {
                    html += '<div class="da-item">' + item + '</div>';
                });
                html += '</div></div>';
            }
            
            // Process
            if (service.process) {
                html += '<div class="da-section"><h2>Process</h2>';
                service.process.forEach(function(step, i) {
                    html += '<div class="da-step"><span class="da-step-num">' + (i+1) + '</span><p>' + step + '</p></div>';
                });
                html += '</div>';
            }
            
            // Staffing/Training
            if (service.staffing || service.training) {
                html += '<div class="da-section"><h2>Services</h2>';
                
                if (service.staffing) {
                    html += '<div style="background:rgba(255,255,255,0.05);padding:30px;border-radius:20px;margin-bottom:20px;border:1px solid rgba(255,255,255,0.1);">';
                    html += '<h3 style="font-family:Playfair Display;font-size:24px;margin-bottom:15px;color:#d4af37;">👤 ' + service.staffing.title + '</h3>';
                    html += '<p style="opacity:0.8;margin-bottom:20px;line-height:1.7;">' + service.staffing.desc + '</p>';
                    html += '<div class="da-grid-2">';
                    service.staffing.points.forEach(function(p) {
                        html += '<div class="da-item">' + p + '</div>';
                    });
                    html += '</div></div>';
                }
                
                if (service.training) {
                    html += '<div style="background:rgba(255,255,255,0.05);padding:30px;border-radius:20px;border:1px solid rgba(255,255,255,0.1);">';
                    html += '<div style="display:inline-block;padding:10px 20px;background:#d4af37;color:#0a0e27;border-radius:50px;font-weight:700;font-size:14px;margin-bottom:15px;">⏱️ ' + service.training.duration + ' Program</div>';
                    html += '<h3 style="font-family:Playfair Display;font-size:24px;margin-bottom:15px;color:#d4af37;">🎓 ' + service.training.title + '</h3>';
                    html += '<p style="opacity:0.8;margin-bottom:20px;line-height:1.7;">' + service.training.desc + '</p>';
                    
                    html += '<div style="display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-bottom:20px;">';
                    service.training.tools.forEach(function(tool) {
                        html += '<div style="padding:12px;background:rgba(255,255,255,0.05);border-radius:8px;font-size:13px;"><span style="color:#0066ff;margin-right:8px;">✓</span>' + tool + '</div>';
                    });
                    html += '</div>';
                    
                    html += '<p style="margin-bottom:15px;"><strong style="color:#d4af37;">Prerequisites:</strong> ' + service.training.prereq + '</p>';
                    
                    html += '<div style="display:flex;flex-wrap:wrap;gap:8px;margin-bottom:20px;">';
                    service.training.curriculum.forEach(function(c) {
                        html += '<span style="padding:8px 16px;background:rgba(0,102,255,0.15);color:#0066ff;border-radius:50px;font-size:13px;font-weight:600;">' + c + '</span>';
                    });
                    html += '</div>';
                    
                    html += '<div style="padding-top:20px;border-top:1px solid rgba(255,255,255,0.1);"><span style="color:#0066ff;font-weight:700;font-size:20px;">✅ ' + service.training.outcome + '</span></div>';
                    html += '</div>';
                }
                
                html += '</div>';
            }
            
            // Features
            html += '<div class="da-section"><h2>Key Features</h2><div class="da-grid-2">';
            service.features.forEach(function(f) {
                html += '<div class="da-item">' + f + '</div>';
            });
            html += '</div></div>';
            
            // Deliverables
            html += '<div class="da-section"><h2>Deliverables</h2><div class="da-grid-2">';
            service.deliverables.forEach(function(d) {
                html += '<div class="da-item">' + d + '</div>';
            });
            html += '</div></div>';
            
            // PROJECTS WITH IMAGES - VERCEL COMPATIBLE
            if (service.projects && service.projects.length > 0) {
                html += '<div class="da-section"><h2>Featured Projects</h2><div class="da-grid-3">';
                
                service.projects.forEach(function(p, idx) {
                    var imgUrl = serviceImages.projects[idx] || '';
                    
                    html += '<div class="da-project">';
                    html += '<div class="da-project-img-wrap">';
                    
                    if (imgUrl) {
                        // Full URL with error handling
                        html += '<img src="' + imgUrl + '" alt="' + p.title + '" onload="console.log(\'✅ Loaded: ' + imgUrl + '\')" onerror="console.error(\'❌ Failed: ' + imgUrl + '\'); this.style.display=\'none\'; this.parentElement.querySelector(\'.da-project-fallback\').style.display=\'flex\';">';
                        html += '<div class="da-project-fallback" style="display:none;">📷</div>';
                    } else {
                        html += '<div class="da-project-fallback">📷</div>';
                    }
                    
                    html += '</div>';
                    html += '<div class="da-project-info">';
                    html += '<div class="da-project-cat">' + p.category + '</div>';
                    html += '<h3 class="da-project-title">' + p.title + '</h3>';
                    html += '<p class="da-project-desc">' + p.desc + '</p>';
                    html += '</div></div>';
                });
                
                html += '</div></div>';
            }
            
            // Industries
            if (service.industries) {
                html += '<div class="da-section"><h2>Industries</h2>';
                service.industries.forEach(function(ind) {
                    html += '<span class="da-tag">' + ind + '</span>';
                });
                html += '</div>';
            }
            
            html += '</div>';
            
            // Sidebar
            html += '<aside class="da-side">';
            
            html += '<div class="da-box"><h3>All Services</h3>';
            allServices.forEach(function(s, idx) {
                var activeClass = (s.id === service.id) ? 'active' : '';
                var iconSvg = iconConfig[s.icon] || '<span style="width:24px;text-align:center;color:#d4af37;">●</span>';
                
                html += '<div class="da-nav-item ' + activeClass + '" onclick="switchToService(' + idx + ')">';
                html += iconSvg;
                html += '<span>' + s.title + '</span></div>';
            });
            html += '</div>';
            
            html += '<div class="da-box"><h3>Get Started</h3>';
            html += '<p style="opacity:0.7;margin-bottom:20px;font-size:14px;line-height:1.6;">Ready to discuss your project?</p>';
            html += '<a href="https://wa.me/919611391279" target="_blank" class="da-btn da-btn-wa">📱 WhatsApp</a>';
            html += '<a href="tel:+919611391279" class="da-btn da-btn-call">📞 Call Now</a>';
            html += '</div>';
            
            html += '</aside>';
            html += '</div>';
            
            content.innerHTML = html;
            overlay.style.display = 'block';
            document.body.style.overflow = 'hidden';
            overlay.scrollTop = 0;
            
            // Debug: Show image paths in console
            console.log('Image paths for', service.id);
            console.log('Hero:', serviceImages.hero);
            console.log('Projects:', serviceImages.projects);
        }
        
        window.closeServiceOverlay = function() {
            document.getElementById('da-service-overlay').style.display = 'none';
            document.body.style.overflow = '';
        };
        
        window.switchToService = function(index) {
            var service = services[index];
            if (service) {
                openOverlay(service, services, images, icons);
            }
        };
        
        document.getElementById('da-service-overlay').addEventListener('click', function(e) {
            if (e.target === this) {
                closeServiceOverlay();
            }
        });
        
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeServiceOverlay();
            }
        });
        
        console.log('Service Detail: Ready for Vercel');
        console.log('Base URL:', baseUrl);
    }
})();