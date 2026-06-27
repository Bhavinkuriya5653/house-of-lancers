// --- GLOBAL CONFIGURATION ---
const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSca13hRUp14_aPqM2UjQ_M1jSXeE0o-gK9Z7NqT0_placeholder/viewform";

document.addEventListener('DOMContentLoaded', () => {
  // --- THEME INITIALIZATION AND TOGGLER ---
  const themeToggleBtns = document.querySelectorAll('.theme-toggle');
  
  // Update toggle icons based on theme
  const updateToggleIcons = (isLight) => {
    themeToggleBtns.forEach(btn => {
      if (isLight) {
        // Show Moon Icon (to switch to dark)
        btn.innerHTML = `
          <svg viewBox="0 0 24 24">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        `;
      } else {
        // Show Sun Icon (to switch to light)
        btn.innerHTML = `
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="5" />
            <line x1="12" y1="1" x2="12" y2="3" />
            <line x1="12" y1="21" x2="12" y2="23" />
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
            <line x1="1" y1="12" x2="3" y2="12" />
            <line x1="21" y1="12" x2="23" y2="12" />
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
          </svg>
        `;
      }
    });
  };

  // Sync theme icon initially
  const initialThemeIsLight = document.documentElement.classList.contains('light-mode');
  updateToggleIcons(initialThemeIsLight);

  // Toggle Action
  themeToggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const isLight = document.documentElement.classList.toggle('light-mode');
      localStorage.setItem('theme', isLight ? 'light' : 'dark');
      updateToggleIcons(isLight);
    });
  });

  // --- CUSTOM CURSOR ---
  const cursor = document.querySelector('.custom-cursor');
  if (cursor) {
    document.addEventListener('mousemove', (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    });

    const hoverables = document.querySelectorAll('a, button, .glass-card, .faq-item, .portfolio-filter, .theme-toggle');
    hoverables.forEach(hoverable => {
      hoverable.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
      hoverable.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
  }

  // --- STICKY NAV & MOBILE MENU ---
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link:not(.dropdown > a)').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
      });
    });
  }

  // --- GLASS CARD HOVER EFFECT ---
  const cards = document.querySelectorAll('.glass-card');
  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      card.style.setProperty('--mouse-x', `${x}px`);
      card.style.setProperty('--mouse-y', `${y}px`);
    });
  });

  // --- STATS COUNT UP ANIMATION ---
  const counters = document.querySelectorAll('.counter-value');
  const countUpSpeed = 150; 

  const startCounting = (counter) => {
    const target = +counter.getAttribute('data-target');
    const suffix = counter.getAttribute('data-suffix') || '';
    let count = 0;
    const increment = Math.ceil(target / countUpSpeed);

    const updateCount = () => {
      count += increment;
      if (count >= target) {
        counter.innerText = target + suffix;
      } else {
        counter.innerText = count + suffix;
        setTimeout(updateCount, 15);
      }
    };
    updateCount();
  };

  const counterObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounting(entry.target);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));

  // --- FAQ INTERACTIVITY ---
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      item.classList.toggle('active');
    });
  });

  // --- WHATSAPP FLOATING CLICK ---
  const whatsappButton = document.querySelector('.whatsapp-float');
  if (whatsappButton) {
    whatsappButton.addEventListener('click', () => {
      window.open('https://wa.me/917383132301?text=Hello%20House%20Of%20Lancers,%20I%20would%20like%20to%20discuss%20a%20growth%20strategy!', '_blank');
    });
  }

  // --- STRATEGY CALL BOOKING MODAL ---
  const bookStrategyButtons = document.querySelectorAll('.book-strategy-trigger');
  
  if (bookStrategyButtons.length > 0) {
    const modalHTML = `
      <div class="booking-modal-overlay" id="bookingModal">
        <div class="booking-modal-content glass-card">
          <button class="modal-close-btn">&times;</button>
          
          <!-- Progress bar -->
          <div class="quiz-progress-bar-container">
            <div class="quiz-progress-bar" id="quizProgress" style="width: 33.33%;"></div>
          </div>
          
          <div class="modal-header" id="modalQuizHeader" style="margin-bottom: 1.5rem;">
            <span class="step-indicator" id="stepIndicator" style="font-size: 0.8rem; color: var(--accent); font-family: var(--font-heading); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: block; margin-bottom: 0.5rem;">Step 1 of 3</span>
            <h3 class="accent-text" id="modalHeaderTitle" style="font-size: 1.5rem; font-family: var(--font-heading); font-weight: 700; line-height: 1.2;">Select Your Primary Bottleneck</h3>
          </div>

          <form class="modal-form" id="modalBookingForm">
            <!-- Step 1: Services/Bottlenecks selection -->
            <div class="quiz-step active" data-step="1">
              <div class="quiz-options-grid">
                <label class="quiz-option-card">
                  <input type="radio" name="modal-service" value="SMM & Leads" checked>
                  <span class="quiz-card-content">
                    <span class="quiz-card-title">SMM &amp; Lead Generation</span>
                    <span class="quiz-card-desc">Scale pipelines through organic reels, posts, and paid social ads.</span>
                  </span>
                </label>
                <label class="quiz-option-card">
                  <input type="radio" name="modal-service" value="Business Automation">
                  <span class="quiz-card-content">
                    <span class="quiz-card-title">Business &amp; CRM Automation</span>
                    <span class="quiz-card-desc">Save hours by deploying AI agents, routers, and automations.</span>
                  </span>
                </label>
                <label class="quiz-option-card">
                  <input type="radio" name="modal-service" value="Design & Branding">
                  <span class="quiz-card-content">
                    <span class="quiz-card-title">Creative Design &amp; Branding</span>
                    <span class="quiz-card-desc">Establish premium trust using top-tier brand books and catalogs.</span>
                  </span>
                </label>
                <label class="quiz-option-card">
                  <input type="radio" name="modal-service" value="Video Editing">
                  <span class="quiz-card-content">
                    <span class="quiz-card-title">Visual Video Editing</span>
                    <span class="quiz-card-desc">Engage audiences immediately with luxury short and longform edits.</span>
                  </span>
                </label>
              </div>
            </div>

            <!-- Step 2: Budget selection -->
            <div class="quiz-step" data-step="2">
              <div class="quiz-options-grid">
                <label class="quiz-option-card">
                  <input type="radio" name="modal-budget" value="Under 25K" checked>
                  <span class="quiz-card-content">
                    <span class="quiz-card-title">Under ₹25,000 / mo</span>
                    <span class="quiz-card-desc">Startup or basic individual project assets.</span>
                  </span>
                </label>
                <label class="quiz-option-card">
                  <input type="radio" name="modal-budget" value="25K - 1L">
                  <span class="quiz-card-content">
                    <span class="quiz-card-title">₹25,000 - ₹1,00,000 / mo</span>
                    <span class="quiz-card-desc">Growing business looking to optimize pipelines.</span>
                  </span>
                </label>
                <label class="quiz-option-card">
                  <input type="radio" name="modal-budget" value="1L - 5L">
                  <span class="quiz-card-content">
                    <span class="quiz-card-title">₹1,00,000 - ₹5,00,000 / mo</span>
                    <span class="quiz-card-desc">Medium business scaling operations and outreach.</span>
                  </span>
                </label>
                <label class="quiz-option-card">
                  <input type="radio" name="modal-budget" value="5L Plus">
                  <span class="quiz-card-content">
                    <span class="quiz-card-title">₹5,00,000+ / mo</span>
                    <span class="quiz-card-desc">Enterprise expansion, all-in-one execution, dedicated team.</span>
                  </span>
                </label>
              </div>
            </div>

            <!-- Step 3: Contact Details -->
            <div class="quiz-step" data-step="3">
              <div style="display: flex; flex-direction: column; gap: 1.2rem;">
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="modal-name">Full Name</label>
                  <input type="text" id="modal-name" required placeholder="John Doe">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="modal-email">Work Email</label>
                  <input type="email" id="modal-email" required placeholder="john@company.com">
                </div>
                <div class="form-group" style="margin-bottom: 0;">
                  <label for="modal-phone">Phone Number (WhatsApp)</label>
                  <input type="tel" id="modal-phone" required placeholder="+91 99999 99999">
                </div>
              </div>
            </div>

            <!-- Navigation Buttons -->
            <div class="quiz-nav-buttons" style="display: flex; gap: 1rem; margin-top: 2rem;">
              <button type="button" class="btn btn-secondary w-full" id="quizPrevBtn" style="display: none; padding: 0.85rem 1.5rem; font-family: var(--font-heading); font-weight: 600;">Back</button>
              <button type="button" class="btn btn-primary w-full" id="quizNextBtn" style="padding: 0.85rem 1.5rem; font-family: var(--font-heading); font-weight: 600;">Continue</button>
            </div>
          </form>

          <div class="modal-success-msg" style="display:none; text-align:center; padding: 2rem 0;">
            <svg class="success-icon" viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="#d7c373" stroke-width="2" style="margin: 0 auto;">
              <path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h4 class="accent-text" style="margin-top: 1rem; font-size: 1.5rem; font-family: var(--font-heading); font-weight: 700;">Booking Request Received!</h4>
            <p style="margin-top: 0.5rem; font-size: 0.95rem;">Our Growth Director will reach out to you via WhatsApp / Email within 4 hours to lock in your calendar slot.</p>
          </div>
        </div>
      </div>
    `;

    // Append modal CSS directly to document head
    const style = document.createElement('style');
    style.innerHTML = `
      .booking-modal-overlay {
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(10, 10, 10, 0.95);
        backdrop-filter: blur(8px);
        z-index: 10000;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        pointer-events: none;
        transition: var(--transition);
      }
      html.light-mode .booking-modal-overlay {
        background-color: rgba(247, 245, 238, 0.95);
      }
      .booking-modal-overlay.active {
        opacity: 1;
        pointer-events: all;
      }
      .booking-modal-content {
        width: 90%;
        max-width: 500px;
        position: relative;
        padding: 3rem;
      }
      .modal-close-btn {
        position: absolute;
        top: 20px;
        right: 20px;
        background: none;
        border: none;
        font-size: 2rem;
        color: var(--text-secondary);
        cursor: pointer;
        transition: var(--transition-fast);
      }
      .modal-close-btn:hover {
        color: var(--accent);
      }
      .modal-header {
        margin-bottom: 2rem;
      }
      .modal-header h3 {
        font-size: 1.8rem;
        margin-bottom: 0.5rem;
      }
      .modal-header p {
        font-size: 0.9rem;
      }
      .form-group {
        margin-bottom: 1.5rem;
        text-align: left;
      }
      .form-group label {
        display: block;
        font-family: var(--font-heading);
        font-weight: 500;
        font-size: 0.85rem;
        margin-bottom: 0.5rem;
        color: var(--text-secondary);
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .form-group input, .form-group select {
        width: 100%;
        padding: 0.85rem 1rem;
        background-color: rgba(255, 255, 255, 0.03);
        border: 1px solid var(--border);
        border-radius: 4px;
        color: var(--text-primary);
        font-family: var(--font-body);
        font-size: 0.95rem;
        transition: var(--transition);
      }
      html.light-mode .form-group input, html.light-mode .form-group select {
        background-color: rgba(0, 0, 0, 0.02);
      }
      .form-group input:focus, .form-group select:focus {
        border-color: var(--accent);
        background-color: rgba(255, 255, 255, 0.05);
      }
      .w-full {
        width: 100%;
        margin-top: 1rem;
      }
      .quiz-progress-bar-container {
        width: 100%;
        height: 4px;
        background-color: var(--border);
        border-radius: 2px;
        margin-bottom: 2rem;
        overflow: hidden;
      }
      .quiz-progress-bar {
        height: 100%;
        background-color: var(--accent);
        transition: width 0.4s ease;
      }
      .quiz-step {
        display: none;
      }
      .quiz-step.active {
        display: block;
      }
      .quiz-options-grid {
        display: grid;
        grid-template-columns: 1fr;
        gap: 1rem;
      }
      .quiz-option-card {
        cursor: pointer;
        position: relative;
        display: block;
      }
      .quiz-option-card input[type="radio"] {
        position: absolute;
        opacity: 0;
        width: 0;
        height: 0;
      }
      .quiz-card-content {
        display: block;
        padding: 1.2rem;
        background-color: rgba(255, 255, 255, 0.02);
        border: 1px solid var(--border);
        border-radius: 4px;
        transition: var(--transition-fast);
      }
      html.light-mode .quiz-card-content {
        background-color: rgba(0, 0, 0, 0.01);
      }
      .quiz-option-card input[type="radio"]:checked + .quiz-card-content {
        border-color: var(--accent);
        background-color: rgba(215, 195, 115, 0.08);
      }
      .quiz-card-title {
        display: block;
        font-family: var(--font-heading);
        font-weight: 700;
        font-size: 1rem;
        color: var(--text-primary);
        margin-bottom: 0.3rem;
      }
      .quiz-card-desc {
        display: block;
        font-size: 0.8rem;
        color: var(--text-muted);
      }
    `;
    document.head.appendChild(style);
    
    const modalWrapper = document.createElement('div');
    modalWrapper.innerHTML = modalHTML.trim();
    document.body.appendChild(modalWrapper.firstChild);

    const bookingModal = document.getElementById('bookingModal');
    const closeModalBtn = bookingModal.querySelector('.modal-close-btn');
    const bookingForm = document.getElementById('modalBookingForm');
    const successMsg = bookingModal.querySelector('.modal-success-msg');
    
    // Quiz navigation selectors
    const quizSteps = bookingModal.querySelectorAll('.quiz-step');
    const quizPrevBtn = document.getElementById('quizPrevBtn');
    const quizNextBtn = document.getElementById('quizNextBtn');
    const quizProgress = document.getElementById('quizProgress');
    const stepIndicator = document.getElementById('stepIndicator');
    const modalHeaderTitle = document.getElementById('modalHeaderTitle');
    const modalQuizHeader = document.getElementById('modalQuizHeader');

    let currentStep = 1;

    const updateQuizUI = () => {
      // Toggle steps active
      quizSteps.forEach(step => {
        const stepNum = +step.getAttribute('data-step');
        if (stepNum === currentStep) {
          step.classList.add('active');
        } else {
          step.classList.remove('active');
        }
      });

      // Update text & indicators
      stepIndicator.innerText = `Step ${currentStep} of 3`;
      if (currentStep === 1) {
        modalHeaderTitle.innerText = "Select Your Primary Bottleneck";
        quizPrevBtn.style.display = 'none';
        quizNextBtn.innerText = "Continue";
        quizProgress.style.width = '33.33%';
      } else if (currentStep === 2) {
        modalHeaderTitle.innerText = "Select Monthly Marketing Budget";
        quizPrevBtn.style.display = 'block';
        quizNextBtn.innerText = "Continue";
        quizProgress.style.width = '66.66%';
      } else if (currentStep === 3) {
        modalHeaderTitle.innerText = "Align Your Strategy Session";
        quizPrevBtn.style.display = 'block';
        quizNextBtn.innerText = "Book Strategy Call";
        quizProgress.style.width = '100%';
      }
    };

    bookStrategyButtons.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(GOOGLE_FORM_URL, '_blank');
      });
    });

    const closeModal = () => {
      bookingModal.classList.remove('active');
      document.body.style.overflow = '';
      setTimeout(() => {
        bookingForm.style.display = 'block';
        modalQuizHeader.style.display = 'block';
        successMsg.style.display = 'none';
        currentStep = 1;
        updateQuizUI();
        bookingForm.reset();
      }, 400);
    };

    closeModalBtn.addEventListener('click', closeModal);
    bookingModal.addEventListener('click', (e) => {
      if (e.target === bookingModal) closeModal();
    });

    quizNextBtn.addEventListener('click', (e) => {
      if (currentStep < 3) {
        currentStep++;
        updateQuizUI();
      } else {
        // Trigger submit
        bookingForm.requestSubmit();
      }
    });

    quizPrevBtn.addEventListener('click', () => {
      if (currentStep > 1) {
        currentStep--;
        updateQuizUI();
      }
    });

    bookingForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const service = bookingForm.querySelector('input[name="modal-service"]:checked').value;
      const budget = bookingForm.querySelector('input[name="modal-budget"]:checked').value;
      const name = document.getElementById('modal-name').value;
      
      // Construct WhatsApp Direct Message
      const waText = `Hello House Of Lancers! I just scheduled a strategy call on your website.\n\nName: ${name}\nGrowth Bottleneck: ${service}\nMarketing Budget: ${budget}\n\nPlease confirm my slot!`;
      const waUrl = `https://wa.me/917383132301?text=${encodeURIComponent(waText)}`;

      // Success Display
      bookingForm.style.display = 'none';
      modalQuizHeader.style.display = 'none';
      successMsg.style.display = 'block';
      
      // Auto redirect to WhatsApp
      setTimeout(() => {
        window.open(waUrl, '_blank');
      }, 1000);
    });
  }

  // --- ROI CALCULATOR LOGIC ---
  const roiTeamSize = document.getElementById('roi-team-size');
  const roiHourlyRate = document.getElementById('roi-hourly-rate');
  const roiManualHours = document.getElementById('roi-manual-hours');

  if (roiTeamSize && roiHourlyRate && roiManualHours) {
    const roiTeamSizeVal = document.getElementById('roi-team-size-val');
    const roiHourlyRateVal = document.getElementById('roi-hourly-rate-val');
    const roiManualHoursVal = document.getElementById('roi-manual-hours-val');

    const roiHoursSaved = document.getElementById('roi-hours-saved');
    const roiMonthlySavings = document.getElementById('roi-monthly-savings');
    const roiYearlySavings = document.getElementById('roi-yearly-savings');

    const formatCurrency = (val) => {
      return '₹' + Math.round(val).toLocaleString('en-IN');
    };

    const calculateROI = () => {
      const teamSize = +roiTeamSize.value;
      const hourlyRate = +roiHourlyRate.value;
      const manualHours = +roiManualHours.value;

      roiTeamSizeVal.innerText = `${teamSize} member${teamSize > 1 ? 's' : ''}`;
      roiHourlyRateVal.innerText = `₹${hourlyRate} / hr`;
      roiManualHoursVal.innerText = `${manualHours} hour${manualHours > 1 ? 's' : ''}`;

      const monthlyHoursSpent = teamSize * manualHours * 4.333;
      const monthlyHoursSavedVal = Math.round(monthlyHoursSpent * 0.85);
      const monthlySavingsVal = Math.round(monthlyHoursSavedVal * hourlyRate);
      const yearlySavingsVal = Math.round(monthlySavingsVal * 12);

      if (roiHoursSaved) roiHoursSaved.innerText = `${monthlyHoursSavedVal} hrs`;
      if (roiMonthlySavings) roiMonthlySavings.innerText = formatCurrency(monthlySavingsVal);
      if (roiYearlySavings) roiYearlySavings.innerText = formatCurrency(yearlySavingsVal);
    };

    roiTeamSize.addEventListener('input', calculateROI);
    roiTeamSize.addEventListener('change', calculateROI);
    roiHourlyRate.addEventListener('input', calculateROI);
    roiHourlyRate.addEventListener('change', calculateROI);
    roiManualHours.addEventListener('input', calculateROI);
    roiManualHours.addEventListener('change', calculateROI);

    calculateROI();
  }

  // --- INTERACTIVE CAPABILITIES SECTION LOGIC ---
  const smmToggleBtns = document.querySelectorAll('.smm-toggle-btn');
  const socialMockupVisual = document.getElementById('social-mockup-visual');
  const socialMockupVisualContainer = document.getElementById('social-mockup-visual-container');
  const socialMockupTag = document.getElementById('social-mockup-tag');
  const socialStatReach = document.getElementById('social-stat-reach');
  const socialStatEngagement = document.getElementById('social-stat-engagement');
  const socialStatGrowth = document.getElementById('social-stat-growth');

  const smmData = {
    reels: {
      visual: '🎥',
      img: 'https://images.unsplash.com/photo-1574717024453-354056afd6fc?auto=format&fit=crop&w=600&q=80',
      tag: '@house_of_lancers • Instagram Reels',
      reach: '245.5K',
      engagement: '18.4%',
      growth: '+340%'
    },
    carousel: {
      visual: '📸',
      img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=600&q=80',
      tag: '@house_of_lancers • Carousel Slides',
      reach: '98.2K',
      engagement: '12.1%',
      growth: '+185%'
    },
    ads: {
      visual: '📈',
      img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
      tag: '@house_of_lancers • Paid Meta Ad Campaigns',
      reach: '1.2M',
      engagement: '4.8%',
      growth: '+420% ROI'
    }
  };

  if (smmToggleBtns.length > 0 && socialMockupVisual) {
    smmToggleBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        smmToggleBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        
        const type = btn.getAttribute('data-type');
        const data = smmData[type];
        
        if (data) {
          socialMockupVisual.innerText = data.visual;
          socialMockupVisualContainer.style.backgroundImage = `url('${data.img}')`;
          socialMockupTag.innerText = data.tag;
          socialStatReach.innerText = data.reach;
          socialStatEngagement.innerText = data.engagement;
          socialStatGrowth.innerText = data.growth;
          
          if (window.gsap) {
            gsap.fromTo('.social-mockup-display', { scale: 0.98, opacity: 0.8 }, { scale: 1, opacity: 1, duration: 0.4, ease: 'power2.out' });
            gsap.fromTo('#social-mockup-visual', { scale: 0.5 }, { scale: 1, duration: 0.5, ease: 'back.out(1.7)' });
          }
        }
      });
    });
  }

  const flowNodes = document.querySelectorAll('.flow-node');
  if (flowNodes.length > 0) {
    flowNodes.forEach(node => {
      node.addEventListener('mouseenter', () => {
        flowNodes.forEach(n => n.classList.remove('active'));
        node.classList.add('active');
      });
    });
  }

  // --- BRAND LOGO DYNAMIC OVERRIDES & GRADIENTS ---
  const logos = document.querySelectorAll('.logo');
  logos.forEach((logo, idx) => {
    logo.innerHTML = `
      <svg class="logo-svg" viewBox="0 0 100 100" width="38" height="38" style="overflow: visible;">
        <defs>
          <linearGradient id="logoGrad-${idx}" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#398C64" />
            <stop offset="100%" stop-color="#D4C185" />
          </linearGradient>
        </defs>
        <path d="M 38 60 L 38 42 L 50 30" stroke="url(#logoGrad-${idx})" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        <path d="M 50 30 L 62 42 L 62 60 L 43 60 L 54 49" stroke="url(#logoGrad-${idx})" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
      </svg>
      <span class="logo-text" style="font-family: var(--font-heading); font-weight: 300; text-transform: none; letter-spacing: 0.05em; margin-left: 0.5rem; color: var(--text-primary);">House Of <span class="accent-text" style="font-weight: 700; color: var(--accent);">Lancers</span></span>
    `;
  });

  // --- PLAYFUL FLOATING LOGOS ---
  const spawnFloatingLogos = () => {
    const numLogos = 5;
    const container = document.body;
    
    for (let i = 0; i < numLogos; i++) {
      const logoEl = document.createElement('div');
      logoEl.className = 'playful-logo';
      logoEl.innerHTML = `
        <svg viewBox="0 0 100 100" width="28" height="28" style="overflow: visible;">
          <defs>
            <linearGradient id="floatingLogoGrad-${i}" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#398C64" />
              <stop offset="100%" stop-color="#D4C185" />
            </linearGradient>
          </defs>
          <path d="M 38 60 L 38 42 L 50 30" stroke="url(#floatingLogoGrad-${i})" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
          <path d="M 50 30 L 62 42 L 62 60 L 43 60 L 54 49" stroke="url(#floatingLogoGrad-${i})" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
        </svg>
      `;
      
      let posX = Math.random() * (window.innerWidth - 60) + 30;
      let posY = Math.random() * (document.body.scrollHeight - 300) + 150;
      
      let velX = (Math.random() - 0.5) * 0.4;
      let velY = (Math.random() - 0.5) * 0.4;
      
      Object.assign(logoEl.style, {
        position: 'absolute',
        left: '0px',
        top: '0px',
        transform: `translate(${posX}px, ${posY}px)`,
        opacity: '0.08',
        zIndex: '0',
        pointerEvents: 'none',
        transition: 'transform 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.275), opacity 0.3s ease',
        filter: 'drop-shadow(0 0 8px rgba(215, 195, 115, 0.3))'
      });
      
      container.appendChild(logoEl);
      
      let currentX = posX;
      let currentY = posY;
      let angle = Math.random() * 360;
      
      const updateDrift = () => {
        currentX += velX;
        currentY += velY;
        angle += 0.15;
        
        if (currentX < 10 || currentX > window.innerWidth - 40) velX *= -1;
        if (currentY < 10 || currentY > document.body.scrollHeight - 40) velY *= -1;
        
        logoEl.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${angle}deg)`;
        requestAnimationFrame(updateDrift);
      };
      
      document.addEventListener('mousemove', (e) => {
        const dx = e.pageX - currentX;
        const dy = e.pageY - currentY;
        const dist = Math.hypot(dx, dy);
        
        if (dist < 90) {
          const forceAngle = Math.atan2(dy, dx);
          currentX -= Math.cos(forceAngle) * 70;
          currentY -= Math.sin(forceAngle) * 70;
          
          angle += 180;
          
          currentX = Math.max(10, Math.min(window.innerWidth - 40, currentX));
          currentY = Math.max(10, Math.min(document.body.scrollHeight - 40, currentY));
          
          logoEl.style.transform = `translate(${currentX}px, ${currentY}px) rotate(${angle}deg) scale(1.35)`;
          logoEl.style.opacity = '0.3';
          
          setTimeout(() => {
            logoEl.style.opacity = '0.08';
          }, 800);
        }
      });
      
      requestAnimationFrame(updateDrift);
    }
  };
  
  if (document.body) {
    spawnFloatingLogos();
  }

  // --- ANCHOR LINK ACTIVE CLASS HIGHLIGHTING ---
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
});
