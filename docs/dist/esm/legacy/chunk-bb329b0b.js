import { d as h } from './maplestory-skills-fe8c7252.js';
import { a as Rank } from './chunk-7c277b0f.js';
/**
 * Verify that all distributed points are valid and correct incorrect ones.
 * * If a skill has changed, but the requirements are not met, the level of the required skills will also be added.
 * * If the skillchange resulted in a too high sum (e.g. over 68 distributed points), the points will be reduced to the maximum points available.
 * @param chart The chart that uses this skill (usually `this`)
 * @param classSkills All the skills for the relevant class
 * @param skillChanged Which skill has changed, if any.
 */
function processSkills(chart, classSkills, skillChanged) {
    var skills = {};
    var sumRank1 = 0;
    var sumRank2 = 0;
    if (skillChanged && chart[skillChanged.prop] > 0) {
        if (skillChanged.skillRequirements) {
            // make sure to add the minimum level to required skills
            skillChanged.skillRequirements.forEach(function (req) {
                fixRequirements(chart, req);
            });
        }
    }
    // calculate sum and resets locked/required/limitReached
    Object.keys(classSkills).forEach(function (skillKey) {
        var skill = classSkills[skillKey];
        if (skill.rank === Rank.Basic) {
            sumRank1 += chart[skill.prop];
        }
        else {
            sumRank2 += chart[skill.prop];
        }
        skills[skill.prop] = {
            locked: false,
            required: undefined,
            limitReached: false,
        };
    });
    if (skillChanged && skillChanged.rank === Rank.Basic && sumRank1 > 72) {
        // if the sum is too high, reduce the amount of points in the changedSkill to the maximum points that are available.
        chart[skillChanged.prop] -= sumRank1 - 72;
    }
    if (skillChanged && skillChanged.rank === Rank.Awakening && sumRank2 > 15) {
        // if the sum is too high, reduce the amount of points in the changedSkill to the maximum points that are available.
        chart[skillChanged.prop] -= sumRank2 - 15;
    }
    Object.keys(classSkills).forEach(function (skillKey) {
        var skill = classSkills[skillKey];
        if (skill.skillRequirements) {
            skill.skillRequirements.forEach(function (req) {
                if (chart[req.skill.prop] < req.level) {
                    // the skill's requirements are not met, set back to 0.
                    skills[skill.prop].locked = true;
                    chart[skill.prop] = 0;
                }
            });
        }
        if (skill.rank === Rank.Basic) {
            skills[skill.prop].limitReached = (sumRank1 >= 72);
        }
        else {
            skills[skill.prop].limitReached = (sumRank2 >= 15);
        }
        if (chart[skill.prop] === 0) {
            var requiredPoints = calculateRequiredPoints(chart, skill);
            if (skill.rank === Rank.Basic) {
                if (requiredPoints + 1 > 72 - sumRank1) { // + 1, because we need to have any points left AFTER meeting the requirements
                    skills[skill.prop].limitReached = true;
                }
            }
            else {
                if (requiredPoints + 1 > 15 - sumRank2) { // + 1, because we need to have any points left AFTER meeting the requirements
                    skills[skill.prop].limitReached = true;
                }
            }
        }
    });
    // console.log(chart.skills, skills, chart.skills === skills);
    chart.skills = skills;
}
function toggleSkillRequirements(chart, skill, setActive) {
    if (skill.skillRequirements) {
        var didUpdate_1 = false;
        skill.skillRequirements.forEach(function (req) {
            if (chart[req.skill.prop] < req.level) {
                var r = (setActive) ? "Level " + req.level + "+" : undefined;
                if (chart.skills[req.skill.prop].required !== r) {
                    chart.skills[req.skill.prop].required = r;
                    didUpdate_1 = true;
                }
            }
        });
        // simply a performance thing, don't trigger a re-render unless there was an actual change.
        if (didUpdate_1)
            chart.skills = Object.assign({}, chart.skills);
    }
}
function renderLevelControls(chart, classSkills, editable, extras, rank, additionalArgs) {
    if (extras === void 0) { extras = false; }
    if (rank === void 0) { rank = Rank.Basic; }
    return Object.keys(classSkills).map(function (key) {
        var skill = classSkills[key];
        var chartSkill = chart.skills[skill.prop];
        return (h("ms-skill", Object.assign({ slot: "rank-" + rank, class: skill.prop, skill: skill, level: chart[skill.prop], locked: chartSkill.locked, required: chartSkill.required, limitReached: chartSkill.limitReached, disabled: !editable, loop: editable, onLevelchanged: function (evt) { return chart.levelChanged(skill, evt.detail); }, onMouseEnter: function () { return chartSkill.locked && toggleSkillRequirements(chart, skill, true); }, onMouseLeave: function () { return chartSkill.locked && toggleSkillRequirements(chart, skill, false); }, extras: extras }, additionalArgs)));
    });
}
function toSkillChangeEventObject(chart, classSkills, other) {
    var rs = {
        rank: chart.rank,
        skills: Object.keys(classSkills).map(function (key) {
            var skill = classSkills[key];
            return {
                skill: skill.name,
                attr: skill.attr,
                prop: skill.prop,
                level: chart[skill.prop],
                minLevel: skill.minLevel,
                maxLevel: skill.maxLevel,
                rank: skill.rank,
            };
        }),
    };
    if (other) {
        rs.other = Object.keys(other).map(function (key) { return ({ attr: key, value: other[key] }); });
    }
    return rs;
}
function fixRequirements(chart, req) {
    if (chart[req.skill.prop] < req.level) {
        chart[req.skill.prop] = req.level;
    }
    if (req.skill.skillRequirements) {
        req.skill.skillRequirements.forEach(function (r) {
            fixRequirements(chart, r);
        });
    }
}
function calculateRequiredPoints(chart, skill) {
    var requiredPoints = {};
    if (!skill.skillRequirements)
        return 0;
    iterate(skill);
    var sum = Object.keys(requiredPoints).reduce(function (sum, key) {
        return sum + requiredPoints[key];
    }, 0);
    return sum;
    function iterate(skill) {
        skill.skillRequirements.forEach(function (req) {
            var additionalPointsNeeded = Math.max(0, req.level - chart[req.skill.prop]);
            if (!requiredPoints[req.skill.prop] || requiredPoints[req.skill.prop] < additionalPointsNeeded) {
                requiredPoints[req.skill.prop] = additionalPointsNeeded;
            }
            if (req.skill.skillRequirements)
                iterate(req.skill);
        });
    }
}
export { processSkills as a, toSkillChangeEventObject as b, renderLevelControls as c };
