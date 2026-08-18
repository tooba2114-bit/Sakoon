document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // SUKOON - MOOD REMINDERS + DUA
    // ==========================================

    const moodData = {

        // ==========================================
        // SAD
        // ==========================================

        sad: {
            title: "😔 You are feeling sad",

            reminders: [

                {
                    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
                    translation: "So, surely with hardship comes ease.",
                    reference: "Surah Ash-Sharh — 94:5",

                    dua: {
                        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا وَتَوَفَّنَا مُسْلِمِينَ",
                        translation: "Our Lord, pour upon us patience and let us die as Muslims.",
                        reference: "Surah Al-A'raf — 7:126"
                    },

                    quote: "A difficult moment does not define your whole story.",
                    activity: "Take a quiet moment and think of one thing you are thankful for."
                },

                {
                    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
                    translation: "Surely with hardship comes ease.",
                    reference: "Surah Ash-Sharh — 94:6",

                    dua: {
                        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي",
                        translation: "My Lord, expand for me my chest.",
                        reference: "Surah Taha — 20:25"
                    },

                    quote: "You don't have to fix everything today. Take one small step.",
                    activity: "Take a short break and do one small thing that brings you peace."
                },

                {
                    arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
                    translation: "Your Lord has not abandoned you, nor has He become displeased.",
                    reference: "Surah Ad-Duha — 93:3",

                    dua: {
                        arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
                        translation: "My Lord, indeed I am, for whatever good You would send down to me, in need.",
                        reference: "Surah Al-Qasas — 28:24"
                    },

                    quote: "A quiet season does not mean you have been forgotten.",
                    activity: "Spend a few quiet minutes reflecting instead of rushing your thoughts."
                },

                {
                    arabic: "وَلَسَوْفَ يُعْطِيكَ رَبُّكَ فَتَرْضَىٰ",
                    translation: "And your Lord is going to give you, and you will be satisfied.",
                    reference: "Surah Ad-Duha — 93:5",

                    dua: {
                        arabic: "رَبِّ إِنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
                        translation: "My Lord, indeed adversity has touched me, and You are the Most Merciful of the merciful.",
                        reference: "Surah Al-Anbiya — 21:83"
                    },

                    quote: "Hope can begin before you can see how things will improve.",
                    activity: "Write down one thing you hope for and one small step toward it."
                },

                {
                    arabic: "فَإِذَا فَرَغْتَ فَانصَبْ",
                    translation: "So when you have finished, then strive.",
                    reference: "Surah Ash-Sharh — 94:7",

                    dua: {
                        arabic: "رَبِّ زِدْنِي عِلْمًا",
                        translation: "My Lord, increase me in knowledge.",
                        reference: "Surah Taha — 20:114"
                    },

                    quote: "Rest, reset, and then take your next step.",
                    activity: "Complete one simple task that you have been putting off."
                }

            ]
        },


        // ==========================================
        // WORRIED
        // ==========================================

        worried: {
            title: "😟 You are feeling worried",

            reminders: [

                {
                    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
                    translation: "Surely in the remembrance of Allah do hearts find comfort.",
                    reference: "Surah Ar-Ra'd — 13:28",

                    dua: {
                        arabic: "اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْهَمِّ وَالْحَزَنِ",
                        translation: "O Allah, I seek refuge in You from worry and grief.",
                        reference: "Sahih al-Bukhari — 6369"
                    },

                    quote: "You cannot control every outcome. Focus on the next good step.",
                    activity: "Sit somewhere quiet for a few minutes and remember Allah."
                },

                {
                    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
                    translation: "Allah does not burden a soul beyond what it can bear.",
                    reference: "Surah Al-Baqarah — 2:286",

                    dua: {
                        arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
                        translation: "Our Lord, do not impose blame upon us if we forget or make a mistake.",
                        reference: "Surah Al-Baqarah — 2:286"
                    },

                    quote: "You don't need to solve everything at once.",
                    activity: "Write down what is worrying you and separate what you can control."
                },

                {
                    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
                    translation: "And whoever relies upon Allah, then He is sufficient for him.",
                    reference: "Surah At-Talaq — 65:3",

                    dua: {
                        arabic: "حَسْبِيَ اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ",
                        translation: "Allah is sufficient for me; there is no deity except Him.",
                        reference: "Surah At-Tawbah — 9:129"
                    },

                    quote: "You can take life one step at a time without knowing every answer.",
                    activity: "Write down the next small thing you can actually do."
                },

                {
                    arabic: "فَإِنِّي قَرِيبٌ",
                    translation: "Indeed, I am near.",
                    reference: "Surah Al-Baqarah — 2:186",

                    dua: {
                        arabic: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا",
                        translation: "Our Lord, upon You we have relied, and to You we have returned.",
                        reference: "Surah Al-Mumtahanah — 60:4"
                    },

                    quote: "When your thoughts feel overwhelming, return to the present moment.",
                    activity: "Take a few slow breaths and focus on what is happening right now."
                },

                {
                    arabic: "وَلَا تَهِنُوا وَلَا تَحْزَنُوا",
                    translation: "Do not weaken and do not grieve.",
                    reference: "Surah Aal-E-Imran — 3:139",

                    dua: {
                        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
                        translation: "Our Lord, pour upon us patience.",
                        reference: "Surah Al-A'raf — 7:126"
                    },

                    quote: "A worried mind imagines many possibilities. Stay with what you know today.",
                    activity: "Take a short break from whatever is making you overthink."
                }

            ]
        },


        // ==========================================
        // LONELY
        // ==========================================

        lonely: {
            title: "🥺 You are feeling lonely",

            reminders: [

                {
                    arabic: "وَهُوَ مَعَكُمْ أَيْنَ مَا كُنتُمْ",
                    translation: "And He is with you wherever you are.",
                    reference: "Surah Al-Hadid — 57:4",

                    dua: {
                        arabic: "رَبِّ إِنِّي لِمَا أَنزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ",
                        translation: "My Lord, indeed I am in need of whatever good You would send down to me.",
                        reference: "Surah Al-Qasas — 28:24"
                    },

                    quote: "Feeling alone for a moment does not mean you are forgotten.",
                    activity: "Reach out to a trusted friend or family member and simply say hello."
                },

                {
                    arabic: "فَإِنِّي قَرِيبٌ",
                    translation: "Indeed, I am near.",
                    reference: "Surah Al-Baqarah — 2:186",

                    dua: {
                        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي",
                        translation: "My Lord, expand for me my chest.",
                        reference: "Surah Taha — 20:25"
                    },

                    quote: "You don't have to pretend that everything is fine.",
                    activity: "Talk to someone you trust about how your day has been."
                },

                {
                    arabic: "أَلَا بِذِكْرِ اللَّهِ تَطْمَئِنُّ الْقُلُوبُ",
                    translation: "Surely in the remembrance of Allah do hearts find comfort.",
                    reference: "Surah Ar-Ra'd — 13:28",

                    dua: {
                        arabic: "اللَّهُمَّ أَصْلِحْ لِي شَأْنِي كُلَّهُ",
                        translation: "O Allah, set right all of my affairs.",
                        reference: "Sunan Abi Dawud — 5090"
                    },

                    quote: "A peaceful moment can begin with simply slowing down.",
                    activity: "Spend a few quiet minutes in remembrance and reflection."
                },

                {
                    arabic: "مَا وَدَّعَكَ رَبُّكَ وَمَا قَلَىٰ",
                    translation: "Your Lord has not abandoned you, nor has He become displeased.",
                    reference: "Surah Ad-Duha — 93:3",

                    dua: {
                        arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
                        translation: "Our Lord, grant us from our spouses and offspring comfort to our eyes.",
                        reference: "Surah Al-Furqan — 25:74"
                    },

                    quote: "Being by yourself and being forgotten are not the same thing.",
                    activity: "Spend some time with family or someone who makes you feel comfortable."
                },

                {
                    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
                    translation: "Indeed, Allah is with the patient.",
                    reference: "Surah Al-Baqarah — 2:153",

                    dua: {
                        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
                        translation: "Our Lord, pour upon us patience.",
                        reference: "Surah Al-A'raf — 7:126"
                    },

                    quote: "Some seasons require patience before they become clearer.",
                    activity: "Do something simple you enjoy while giving yourself time."
                }

            ]
        },


        // ==========================================
        // ANGRY
        // ==========================================

        angry: {
            title: "😤 You are feeling angry",

            reminders: [

                {
                    arabic: "وَالْكَاظِمِينَ الْغَيْظَ وَالْعَافِينَ عَنِ النَّاسِ",
                    translation: "Those who restrain anger and pardon people.",
                    reference: "Surah Aal-E-Imran — 3:134",

                    dua: {
                        arabic: "رَبَّنَا اغْفِرْ لَنَا ذُنُوبَنَا وَإِسْرَافَنَا فِي أَمْرِنَا",
                        translation: "Our Lord, forgive us our sins and our excesses in our affairs.",
                        reference: "Surah Aal-E-Imran — 3:147"
                    },

                    quote: "You can feel angry without letting anger decide your next action.",
                    activity: "Pause before responding and give yourself some space."
                },

                {
                    arabic: "وَاللَّهُ يُحِبُّ الْمُحْسِنِينَ",
                    translation: "And Allah loves those who do good.",
                    reference: "Surah Aal-E-Imran — 3:134",

                    dua: {
                        arabic: "رَبِّ اغْفِرْ لِي",
                        translation: "My Lord, forgive me.",
                        reference: "Qur'an — 23:118"
                    },

                    quote: "Sometimes strength means knowing when to pause.",
                    activity: "Take a short walk or sit somewhere quiet before continuing a difficult conversation."
                },

                {
                    arabic: "وَلْيَعْفُوا وَلْيَصْفَحُوا",
                    translation: "Let them pardon and overlook.",
                    reference: "Surah An-Nur — 24:22",

                    dua: {
                        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
                        translation: "Our Lord, pour upon us patience.",
                        reference: "Surah Al-A'raf — 7:126"
                    },

                    quote: "Not every disagreement needs an immediate response.",
                    activity: "Give yourself time before replying to a message that upset you."
                },

                {
                    arabic: "وَاصْبِرْ وَمَا صَبْرُكَ إِلَّا بِاللَّهِ",
                    translation: "And be patient, and your patience is not but through Allah.",
                    reference: "Surah An-Nahl — 16:127",

                    dua: {
                        arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
                        translation: "Our Lord, let not our hearts deviate after You have guided us.",
                        reference: "Surah Aal-E-Imran — 3:8"
                    },

                    quote: "A pause gives you space to choose your response instead of reacting.",
                    activity: "Step away from the situation for a few minutes."
                },

                {
                    arabic: "إِنَّ اللَّهَ مَعَ الصَّابِرِينَ",
                    translation: "Indeed, Allah is with the patient.",
                    reference: "Surah Al-Baqarah — 2:153",

                    dua: {
                        arabic: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا",
                        translation: "Our Lord, pour upon us patience.",
                        reference: "Surah Al-A'raf — 7:126"
                    },

                    quote: "Patience does not mean ignoring your feelings; it means handling them wisely.",
                    activity: "Take a few slow breaths before making a decision."
                }

            ]
        },


        // ==========================================
        // TIRED
        // ==========================================

        tired: {
            title: "😴 You are feeling tired",

            reminders: [

                {
                    arabic: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا",
                    translation: "Allah does not burden a soul beyond what it can bear.",
                    reference: "Surah Al-Baqarah — 2:286",

                    dua: {
                        arabic: "رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا",
                        translation: "Our Lord, do not impose blame upon us if we forget or make a mistake.",
                        reference: "Surah Al-Baqarah — 2:286"
                    },

                    quote: "Rest is not wasted time.",
                    activity: "Drink some water and give yourself a quiet break."
                },

                {
                    arabic: "فَإِذَا فَرَغْتَ فَانصَبْ",
                    translation: "So when you have finished, then strive.",
                    reference: "Surah Ash-Sharh — 94:7",

                    dua: {
                        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي",
                        translation: "My Lord, expand for me my chest.",
                        reference: "Surah Taha — 20:25"
                    },

                    quote: "You are allowed to slow down and reset.",
                    activity: "Finish one small task, then take a proper break."
                },

                {
                    arabic: "وَجَعَلْنَا نَوْمَكُمْ سُبَاتًا",
                    translation: "And We made your sleep for rest.",
                    reference: "Surah An-Naba — 78:9",

                    dua: {
                        arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ",
                        translation: "O Allah, I ask You for pardon and well-being.",
                        reference: "Sunan Abi Dawud — 5074"
                    },

                    quote: "Your body and mind need moments of rest too.",
                    activity: "Put your phone away for a while and relax."
                },

                {
                    arabic: "وَجَعَلْنَا اللَّيْلَ لِبَاسًا",
                    translation: "And We made the night as a covering.",
                    reference: "Surah An-Naba — 78:10",

                    dua: {
                        arabic: "بِاسْمِكَ اللَّهُمَّ أَمُوتُ وَأَحْيَا",
                        translation: "In Your name, O Allah, I die and I live.",
                        reference: "Sahih al-Bukhari — 6324"
                    },

                    quote: "It is okay to have a slower day when you need one.",
                    activity: "Create a calm environment and take a proper break."
                },

                {
                    arabic: "فَإِنَّ مَعَ الْعُسْرِ يُسْرًا",
                    translation: "So, surely with hardship comes ease.",
                    reference: "Surah Ash-Sharh — 94:5",

                    dua: {
                        arabic: "رَبِّ إِنِّي مَسَّنِيَ الضُّرُّ وَأَنتَ أَرْحَمُ الرَّاحِمِينَ",
                        translation: "My Lord, adversity has touched me, and You are the Most Merciful of the merciful.",
                        reference: "Surah Al-Anbiya — 21:83"
                    },

                    quote: "A tiring day will eventually become a memory.",
                    activity: "Do what is necessary right now and leave the rest for later."
                }

            ]
        },


        // ==========================================
        // CONFUSED
        // ==========================================

        confused: {
            title: "😐 You are feeling confused",

            reminders: [

                {
                    arabic: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
                    translation: "And say, 'My Lord, increase me in knowledge.'",
                    reference: "Surah Taha — 20:114",

                    dua: {
                        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
                        translation: "My Lord, expand for me my chest and ease for me my task.",
                        reference: "Surah Taha — 20:25-26"
                    },

                    quote: "It is okay not to have all the answers yet.",
                    activity: "Learn one small thing about the situation confusing you."
                },

                {
                    arabic: "وَمَن يَتَوَكَّلْ عَلَى اللَّهِ فَهُوَ حَسْبُهُ",
                    translation: "And whoever relies upon Allah, then He is sufficient for him.",
                    reference: "Surah At-Talaq — 65:3",

                    dua: {
                        arabic: "رَبَّنَا عَلَيْكَ تَوَكَّلْنَا وَإِلَيْكَ أَنَبْنَا",
                        translation: "Our Lord, upon You we have relied, and to You we have returned.",
                        reference: "Surah Al-Mumtahanah — 60:4"
                    },

                    quote: "You don't need to know every step. Just find the next one.",
                    activity: "Write down your options and one thing you know for certain."
                },

                {
                    arabic: "فَاسْأَلُوا أَهْلَ الذِّكْرِ إِن كُنتُمْ لَا تَعْلَمُونَ",
                    translation: "So ask the people of knowledge if you do not know.",
                    reference: "Surah An-Nahl — 16:43",

                    dua: {
                        arabic: "رَبِّ زِدْنِي عِلْمًا",
                        translation: "My Lord, increase me in knowledge.",
                        reference: "Surah Taha — 20:114"
                    },

                    quote: "Asking for guidance is a strength, not a weakness.",
                    activity: "Ask a trusted and knowledgeable person for advice."
                },

                {
                    arabic: "إِنَّ مَعَ الْعُسْرِ يُسْرًا",
                    translation: "Surely with hardship comes ease.",
                    reference: "Surah Ash-Sharh — 94:6",

                    dua: {
                        arabic: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا بَعْدَ إِذْ هَدَيْتَنَا",
                        translation: "Our Lord, let not our hearts deviate after You have guided us.",
                        reference: "Surah Aal-E-Imran — 3:8"
                    },

                    quote: "Clarity often comes one step at a time.",
                    activity: "Take a short break and return to the problem with a fresh mind."
                },

                {
                    arabic: "وَشَاوِرْهُمْ فِي الْأَمْرِ",
                    translation: "And consult them in the matter.",
                    reference: "Surah Aal-E-Imran — 3:159",

                    dua: {
                        arabic: "رَبِّ اشْرَحْ لِي صَدْرِي وَيَسِّرْ لِي أَمْرِي",
                        translation: "My Lord, expand for me my chest and ease for me my task.",
                        reference: "Surah Taha — 20:25-26"
                    },

                    quote: "Sometimes another perspective helps you see what you missed.",
                    activity: "Talk through your options with someone you trust."
                }

            ]
        },


        // ==========================================
        // HAPPY
        // ==========================================

        happy: {
            title: "😊 You are feeling happy",

            reminders: [

                {
                    arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
                    translation: "And as for the favor of your Lord, proclaim it.",
                    reference: "Surah Ad-Duha — 93:11",

                    dua: {
                        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                        translation: "All praise is due to Allah, Lord of the worlds.",
                        reference: "Surah Al-Fatihah — 1:2"
                    },

                    quote: "Good moments become even more meaningful when we notice them.",
                    activity: "Write down three things that made you happy today."
                },

                {
                    arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
                    translation: "If you are grateful, I will certainly give you more.",
                    reference: "Surah Ibrahim — 14:7",

                    dua: {
                        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
                        translation: "My Lord, enable me to be grateful for Your favor.",
                        reference: "Surah An-Naml — 27:19"
                    },

                    quote: "Pause and appreciate the good already present in your life.",
                    activity: "Thank someone who made your day better."
                },

                {
                    arabic: "فَبِذَٰلِكَ فَلْيَفْرَحُوا",
                    translation: "So in that let them rejoice.",
                    reference: "Surah Yunus — 10:58",

                    dua: {
                        arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
                        translation: "Our Lord, grant us from our spouses and offspring comfort to our eyes.",
                        reference: "Surah Al-Furqan — 25:74"
                    },

                    quote: "Joy is worth noticing instead of rushing past.",
                    activity: "Share your happiness with someone you care about."
                },

                {
                    arabic: "وَاسْجُدْ وَاقْتَرِب",
                    translation: "And prostrate and draw near.",
                    reference: "Surah Al-Alaq — 96:19",

                    dua: {
                        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
                        translation: "My Lord, enable me to be grateful for Your favor.",
                        reference: "Surah An-Naml — 27:19"
                    },

                    quote: "Let a good day also be a moment of gratitude.",
                    activity: "Take a quiet moment to reflect on what you are thankful for."
                },

                {
                    arabic: "وَسَيَجْزِي اللَّهُ الشَّاكِرِينَ",
                    translation: "And Allah will reward the grateful.",
                    reference: "Surah Aal-E-Imran — 3:144",

                    dua: {
                        arabic: "الْحَمْدُ لِلَّهِ عَلَىٰ كُلِّ حَالٍ",
                        translation: "Praise belongs to Allah in every situation.",
                        reference: "General expression of praise"
                    },

                    quote: "Gratitude can make a good moment feel even richer.",
                    activity: "Make a small gratitude list before your day ends."
                }

            ]
        },


        // ==========================================
        // GRATEFUL
        // ==========================================

        grateful: {
            title: "🤍 You are feeling grateful",

            reminders: [

                {
                    arabic: "لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ",
                    translation: "If you are grateful, I will certainly give you more.",
                    reference: "Surah Ibrahim — 14:7",

                    dua: {
                        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
                        translation: "My Lord, enable me to be grateful for Your favor.",
                        reference: "Surah An-Naml — 27:19"
                    },

                    quote: "Gratitude turns ordinary moments into meaningful memories.",
                    activity: "Make a list of five things you are grateful for."
                },

                {
                    arabic: "وَإِن تَعُدُّوا نِعْمَتَ اللَّهِ لَا تُحْصُوهَا",
                    translation: "If you tried to count Allah's blessings, you would never be able to number them all.",
                    reference: "Surah Ibrahim — 14:34",

                    dua: {
                        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
                        translation: "My Lord, enable me to be grateful for Your favor.",
                        reference: "Surah An-Naml — 27:19"
                    },

                    quote: "There is often more goodness around us than we notice.",
                    activity: "Notice three small blessings you usually take for granted."
                },

                {
                    arabic: "وَأَمَّا بِنِعْمَةِ رَبِّكَ فَحَدِّثْ",
                    translation: "And as for the favor of your Lord, proclaim it.",
                    reference: "Surah Ad-Duha — 93:11",

                    dua: {
                        arabic: "الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ",
                        translation: "All praise is due to Allah, Lord of the worlds.",
                        reference: "Surah Al-Fatihah — 1:2"
                    },

                    quote: "Remembering what is good can change the way we see an ordinary day.",
                    activity: "Write about one blessing that made today special."
                },

                {
                    arabic: "فَبِذَٰلِكَ فَلْيَفْرَحُوا",
                    translation: "So in that let them rejoice.",
                    reference: "Surah Yunus — 10:58",

                    dua: {
                        arabic: "رَبِّ أَوْزِعْنِي أَنْ أَشْكُرَ نِعْمَتَكَ",
                        translation: "My Lord, enable me to be grateful for Your favor.",
                        reference: "Surah An-Naml — 27:19"
                    },

                    quote: "Let yourself appreciate the good without taking it for granted.",
                    activity: "Share something you are grateful for with someone close to you."
                },

                {
                    arabic: "وَسَيَجْزِي اللَّهُ الشَّاكِرِينَ",
                    translation: "And Allah will reward the grateful.",
                    reference: "Surah Aal-E-Imran — 3:144",

                    dua: {
                        arabic: "رَبَّنَا تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ",
                        translation: "Our Lord, accept from us. Indeed, You are the Hearing, the Knowing.",
                        reference: "Surah Al-Baqarah — 2:127"
                    },

                    quote: "A grateful heart notices blessings that a busy mind can miss.",
                    activity: "Pause for a minute and name three things you appreciate."
                }

            ]
        }

    };


    // ==========================================
    // GET HTML ELEMENTS
    // ==========================================

    const homeScreen =
        document.getElementById("homeScreen");

    const resultScreen =
        document.getElementById("resultScreen");

    const moodTitle =
        document.getElementById("moodTitle");

    const arabicText =
        document.getElementById("arabicText");

    const translation =
        document.getElementById("translation");

    const reference =
        document.getElementById("reference");

    const duaArabic =
        document.getElementById("duaArabic");

    const duaTranslation =
        document.getElementById("duaTranslation");

    const duaReference =
        document.getElementById("duaReference");

    const quote =
        document.getElementById("quote");

    const activity =
        document.getElementById("activity");

    const anotherBtn =
        document.getElementById("anotherBtn");

    const backBtn =
        document.getElementById("backBtn");

    const moodButtons =
        document.querySelectorAll(".mood-btn");


    // ==========================================
    // GAME VARIABLES
    // ==========================================

    let selectedMood = null;

    let currentReminderIndex = -1;


    // ==========================================
    // MOOD BUTTON CLICK
    // ==========================================

    moodButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            selectedMood =
                this.dataset.mood;

            currentReminderIndex = -1;

            homeScreen.classList.add("hidden");

            resultScreen.classList.remove("hidden");

            showReminder();

        });

    });


    // ==========================================
    // SHOW RANDOM REMINDER
    // ==========================================

    function showReminder() {

        if (!selectedMood) {
            return;
        }


        const reminders =
            moodData[selectedMood].reminders;


        let randomIndex;


        // Don't immediately show
        // the same reminder again.

        do {

            randomIndex =
                Math.floor(
                    Math.random() * reminders.length
                );

        }

        while (
            reminders.length > 1 &&
            randomIndex === currentReminderIndex
        );


        currentReminderIndex =
            randomIndex;


        const reminder =
            reminders[randomIndex];


        // ======================================
        // MOOD
        // ======================================

        moodTitle.textContent =
            moodData[selectedMood].title;


        // ======================================
        // QURAN
        // ======================================

        arabicText.textContent =
            reminder.arabic;

        translation.textContent =
            `"${reminder.translation}"`;

        reference.textContent =
            reminder.reference;


        // ======================================
        // DUA
        // ======================================

        duaArabic.textContent =
            reminder.dua.arabic;

        duaTranslation.textContent =
            `"${reminder.dua.translation}"`;

        duaReference.textContent =
            reminder.dua.reference;


        // ======================================
        // QUOTE
        // ======================================

        quote.textContent =
            `"${reminder.quote}"`;


        // ======================================
        // ACTIVITY
        // ======================================

        activity.textContent =
            reminder.activity;


        // ======================================
        // RESTART ANIMATION
        // ======================================

        resultScreen.style.animation = "none";

        resultScreen.offsetHeight;

        resultScreen.style.animation =
            "fadeIn 0.6s ease";

    }


    // ==========================================
    // ANOTHER REMINDER
    // ==========================================

    anotherBtn.addEventListener("click", function () {

        showReminder();

    });


    // ==========================================
    // BACK / CHANGE MOOD
    // ==========================================

    backBtn.addEventListener("click", function () {

        resultScreen.classList.add("hidden");

        homeScreen.classList.remove("hidden");

        selectedMood = null;

        currentReminderIndex = -1;

    });

});